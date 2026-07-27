import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { CookieConsentService } from './cookie-consent.service';

const GOOGLE_TAG_MANAGER_ID = 'GTM-PWPZJD3J';
const GOOGLE_TAG_MANAGER_SCRIPT_ID = 'sprintpark-google-tag-manager';
const ANALYTICS_COOKIE_PREFIXES = ['_ga', '_gid', '_gat', '_gcl', '_gtm'];

type DataLayerEntry = Record<string, unknown> | unknown[];

interface AnalyticsWindow extends Window {
  dataLayer?: DataLayerEntry[];
  gtag?: (...entry: unknown[]) => void;
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private readonly cookieConsentService = inject(CookieConsentService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);

  private analyticsLoaded = false;
  private trackingEnabled = false;
  private currentUrl = '';

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.currentUrl = this.router.url;
    this.initializeGtag();
    this.setConsentMode('default', false);

    this.cookieConsentService.preferences$
      .pipe(
        map((preferences) => preferences.analytics),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((analyticsEnabled) => {
        this.handleAnalyticsConsent(analyticsEnabled);
      });

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        this.currentUrl = event.urlAfterRedirects;
        this.trackCurrentPage();
      });
  }

  private handleAnalyticsConsent(analyticsEnabled: boolean): void {
    this.trackingEnabled = analyticsEnabled;
    this.setConsentMode('update', analyticsEnabled);

    if (!analyticsEnabled) {
      this.clearAnalyticsCookies();
      return;
    }

    this.loadGoogleTagManager();
    this.trackCurrentPage();
  }

  private loadGoogleTagManager(): void {
    if (
      this.analyticsLoaded ||
      this.document.getElementById(GOOGLE_TAG_MANAGER_SCRIPT_ID)
    ) {
      this.analyticsLoaded = true;
      return;
    }

    this.initializeGtag();
    this.pushToDataLayer({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    const script = this.document.createElement('script');
    script.id = GOOGLE_TAG_MANAGER_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_MANAGER_ID}`;
    this.document.head.appendChild(script);
    this.analyticsLoaded = true;
  }

  private trackCurrentPage(): void {
    if (!this.trackingEnabled) {
      return;
    }

    this.pushToDataLayer({
      event: 'page_view',
      page_location: this.document.location.href,
      page_path: this.getPagePath(this.currentUrl),
      page_title: this.document.title,
    });
  }

  private getPagePath(url: string): string {
    const normalizedUrl = url || '/';
    const path = normalizedUrl.split('#')[0] || '/';

    return path.startsWith('/') ? path : `/${path}`;
  }

  private setConsentMode(
    mode: 'default' | 'update',
    analyticsEnabled: boolean,
  ): void {
    this.pushToDataLayer([
      'consent',
      mode,
      {
        ad_personalization: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        analytics_storage: analyticsEnabled ? 'granted' : 'denied',
        functionality_storage: 'granted',
        security_storage: 'granted',
        wait_for_update: 500,
      },
    ]);
  }

  private pushToDataLayer(entry: DataLayerEntry): void {
    const analyticsWindow = this.getAnalyticsWindow();
    if (!analyticsWindow) {
      return;
    }

    analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
    analyticsWindow.dataLayer.push(entry);
  }

  private initializeGtag(): void {
    const analyticsWindow = this.getAnalyticsWindow();
    if (!analyticsWindow) {
      return;
    }

    analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? [];
    analyticsWindow.gtag =
      analyticsWindow.gtag ??
      function gtag(...entry: unknown[]) {
        analyticsWindow.dataLayer?.push(entry);
      };
  }

  private getAnalyticsWindow(): AnalyticsWindow | null {
    return this.document.defaultView as AnalyticsWindow | null;
  }

  private clearAnalyticsCookies(): void {
    const cookieNames = this.document.cookie
      .split(';')
      .map((cookie) => cookie.split('=')[0].trim())
      .filter((cookieName) =>
        ANALYTICS_COOKIE_PREFIXES.some(
          (prefix) =>
            cookieName === prefix || cookieName.startsWith(`${prefix}_`),
        ),
      );

    const domains = this.getCookieDomains();
    cookieNames.forEach((cookieName) => {
      domains.forEach((domain) => {
        this.expireCookie(cookieName, domain);
      });
    });
  }

  private getCookieDomains(): string[] {
    const hostname = this.document.location.hostname;
    const domains = new Set<string>(['', hostname]);
    const hostnameParts = hostname.split('.');

    for (let index = 0; index < hostnameParts.length - 1; index += 1) {
      domains.add(`.${hostnameParts.slice(index).join('.')}`);
    }

    return [...domains];
  }

  private expireCookie(cookieName: string, domain: string): void {
    const domainAttribute = domain ? `; domain=${domain}` : '';

    this.document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainAttribute}; SameSite=Lax`;
  }
}

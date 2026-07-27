import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import {
  CookieConsentPreferences,
  CookieConsentService,
} from '../services/cookie-consent.service';

@Component({
  selector: 'app-cookie-popup',
  imports: [CommonModule, RouterLink],
  templateUrl: './cookie-popup.component.html',
  styleUrl: './cookie-popup.component.scss',
})
export class CookiePopupComponent implements OnInit, OnDestroy {
  private readonly cookieConsentService = inject(CookieConsentService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly policyPagePaths = ['/cookie-policy', '/privacy-policy'];
  private preferencesDialogSubscription?: Subscription;
  private routeSubscription?: Subscription;
  private previousBodyOverflow = '';
  private isPageLocked = false;

  public showPopup = this.shouldShowPopup();
  public showPreferences = false;
  public preferences: CookieConsentPreferences =
    this.cookieConsentService.getPreferencesSnapshot();

  public ngOnInit(): void {
    this.preferencesDialogSubscription =
      this.cookieConsentService.preferencesDialogRequested$.subscribe(() => {
        this.openPreferencesDialog();
      });
    this.routeSubscription = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe((event) => {
        this.syncPopupWithRoute(event.urlAfterRedirects);
      });

    this.syncPopupWithRoute(this.router.url);
  }

  public ngOnDestroy(): void {
    this.preferencesDialogSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
    this.unlockPage();
  }

  public acceptAll(): void {
    this.preferences = { essential: true, analytics: true };
    this.cookieConsentService.acceptAll();
    this.closePopup();
  }

  public rejectNonEssential(): void {
    this.preferences = { essential: true, analytics: false };
    this.cookieConsentService.rejectNonEssential();
    this.closePopup();
  }

  public saveSelected(): void {
    this.cookieConsentService.savePreferences(this.preferences);
    this.closePopup();
  }

  public openPreferences(): void {
    this.showPreferences = true;
    this.lockPageWhenOpen();
  }

  public openPolicyPage(): void {
    this.closePopup();
  }

  public updateAnalyticsPreference(event: Event): void {
    this.preferences = {
      ...this.preferences,
      analytics: (event.target as HTMLInputElement).checked,
    };
  }

  private shouldShowPopup(): boolean {
    return (
      isPlatformBrowser(this.platformId) &&
      !this.cookieConsentService.hasSavedConsent() &&
      !this.isPolicyPageUrl(this.router.url)
    );
  }

  private syncPopupWithRoute(url: string): void {
    if (this.isPolicyPageUrl(url)) {
      this.closePopup();
      return;
    }

    if (
      isPlatformBrowser(this.platformId) &&
      !this.cookieConsentService.hasSavedConsent()
    ) {
      this.showPopup = true;
      this.showPreferences = false;
      this.lockPageWhenOpen();
    }
  }

  private isPolicyPageUrl(url: string): boolean {
    const path = url.split('?')[0].split('#')[0].replace(/\/$/, '');

    return this.policyPagePaths.includes(path);
  }

  private openPreferencesDialog(): void {
    this.preferences = this.cookieConsentService.getPreferencesSnapshot();
    this.showPopup = true;
    this.showPreferences = true;
    this.lockPageWhenOpen();
  }

  private closePopup(): void {
    this.showPopup = false;
    this.showPreferences = false;
    this.unlockPage();
  }

  private lockPageWhenOpen(): void {
    if (
      !this.showPopup ||
      this.isPageLocked ||
      !isPlatformBrowser(this.platformId)
    ) {
      return;
    }

    this.previousBodyOverflow = this.document.body.style.overflow;
    this.document.body.style.overflow = 'hidden';
    this.isPageLocked = true;
  }

  private unlockPage(): void {
    if (!this.isPageLocked || !isPlatformBrowser(this.platformId)) {
      return;
    }

    this.document.body.style.overflow = this.previousBodyOverflow;
    this.isPageLocked = false;
  }
}

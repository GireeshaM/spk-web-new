import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export const COOKIE_CONSENT_STORAGE_KEY = 'sprintpark_cookie_consent_v3';

export interface CookieConsentPreferences {
  essential: true;
  analytics: boolean;
}

interface StoredCookieConsent {
  savedAt: string;
  preferences: CookieConsentPreferences;
}

@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly defaultPreferences: CookieConsentPreferences = {
    essential: true,
    analytics: false,
  };
  private readonly preferencesSubject =
    new BehaviorSubject<CookieConsentPreferences>(this.readPreferences());
  private readonly preferencesDialogRequestSubject = new Subject<void>();

  public readonly preferences$ = this.preferencesSubject.asObservable();
  public readonly preferencesDialogRequested$ =
    this.preferencesDialogRequestSubject.asObservable();

  public hasSavedConsent(): boolean {
    return this.readStoredConsent() !== null;
  }

  public getPreferencesSnapshot(): CookieConsentPreferences {
    return this.preferencesSubject.value;
  }

  public acceptAll(): void {
    this.savePreferences({ essential: true, analytics: true });
  }

  public rejectNonEssential(): void {
    this.savePreferences({ essential: true, analytics: false });
  }

  public savePreferences(preferences: CookieConsentPreferences): void {
    const normalizedPreferences: CookieConsentPreferences = {
      essential: true,
      analytics: preferences.analytics,
    };

    if (this.isBrowser()) {
      window.localStorage.setItem(
        COOKIE_CONSENT_STORAGE_KEY,
        JSON.stringify({
          savedAt: new Date().toISOString(),
          preferences: normalizedPreferences,
        }),
      );

      window.dispatchEvent(
        new CustomEvent('sprintparkCookieConsentChanged', {
          detail: normalizedPreferences,
        }),
      );
    }

    this.preferencesSubject.next(normalizedPreferences);
  }

  public openPreferencesDialog(): void {
    this.preferencesDialogRequestSubject.next();
  }

  private readPreferences(): CookieConsentPreferences {
    const storedConsent = this.readStoredConsent();

    return storedConsent?.preferences ?? this.defaultPreferences;
  }

  private readStoredConsent(): StoredCookieConsent | null {
    if (!this.isBrowser()) {
      return null;
    }

    const rawConsent = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!rawConsent) {
      return null;
    }

    try {
      const parsedConsent = JSON.parse(
        rawConsent,
      ) as Partial<StoredCookieConsent>;

      return {
        savedAt:
          typeof parsedConsent.savedAt === 'string'
            ? parsedConsent.savedAt
            : new Date().toISOString(),
        preferences: {
          essential: true,
          analytics: Boolean(parsedConsent.preferences?.analytics),
        },
      };
    } catch {
      return null;
    }
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}

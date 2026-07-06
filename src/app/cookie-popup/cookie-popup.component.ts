import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

type CookiePreferenceKey = 'performance' | 'functional' | 'marketing';

interface CookiePreferences {
  performance: boolean;
  functional: boolean;
  marketing: boolean;
}

@Component({
  selector: 'app-cookie-popup',
  imports: [CommonModule],
  templateUrl: './cookie-popup.component.html',
  styleUrl: './cookie-popup.component.scss',
})
export class CookiePopupComponent implements OnInit, OnDestroy {
  private readonly storageKey = 'sprintpark_cookie_preferences_v2';
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private previousBodyOverflow = '';

  public showPopup = this.shouldShowPopup();
  public showPreferences = false;
  public preferences: CookiePreferences = {
    performance: false,
    functional: false,
    marketing: false,
  };

  public ngOnInit(): void {
    this.lockPageWhenOpen();
  }

  public ngOnDestroy(): void {
    this.unlockPage();
  }

  public acceptAll(): void {
    this.savePreferences({
      performance: true,
      functional: true,
      marketing: true,
    });
  }

  public rejectAll(): void {
    this.savePreferences({
      performance: false,
      functional: false,
      marketing: false,
    });
  }

  public saveSelected(): void {
    this.savePreferences(this.preferences);
  }

  public togglePreferences(): void {
    this.showPreferences = !this.showPreferences;
  }

  public updatePreference(key: CookiePreferenceKey, event: Event): void {
    this.preferences = {
      ...this.preferences,
      [key]: (event.target as HTMLInputElement).checked,
    };
  }

  private shouldShowPopup(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    return window.localStorage.getItem(this.storageKey) === null;
  }

  private savePreferences(preferences: CookiePreferences): void {
    this.preferences = preferences;
    this.showPopup = false;
    this.unlockPage();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.localStorage.setItem(
      this.storageKey,
      JSON.stringify({
        savedAt: new Date().toISOString(),
        preferences,
      }),
    );
  }

  private lockPageWhenOpen(): void {
    if (!this.showPopup || !isPlatformBrowser(this.platformId)) {
      return;
    }

    this.previousBodyOverflow = this.document.body.style.overflow;
    this.document.body.style.overflow = 'hidden';
  }

  private unlockPage(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.document.body.style.overflow = this.previousBodyOverflow;
  }
}

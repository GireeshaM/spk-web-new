import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AnalyticsService } from './analytics.service';
import {
  COOKIE_CONSENT_STORAGE_KEY,
  CookieConsentService,
} from './cookie-consent.service';

type DataLayerEntry = Record<string, unknown> | unknown[];

interface AnalyticsWindow extends Window {
  dataLayer?: DataLayerEntry[];
}

describe('AnalyticsService', () => {
  const scriptId = 'sprintpark-google-tag-manager';

  beforeEach(() => {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    (window as AnalyticsWindow).dataLayer = [];
    document.getElementById(scriptId)?.remove();
  });

  afterEach(() => {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    (window as AnalyticsWindow).dataLayer = [];
    document.getElementById(scriptId)?.remove();
  });

  it('should not load Google Tag Manager before analytics consent', () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });

    TestBed.inject(AnalyticsService);

    expect(document.getElementById(scriptId)).toBeNull();
    expect(hasDataLayerEvent('page_view')).toBeFalse();
  });

  it('should load Google Tag Manager and push a page view after analytics consent', () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });

    TestBed.inject(AnalyticsService);
    TestBed.inject(CookieConsentService).acceptAll();

    const script = document.getElementById(
      scriptId,
    ) as HTMLScriptElement | null;

    expect(script).not.toBeNull();
    expect(script?.src).toContain('GTM-PWPZJD3J');
    expect(hasGtmStartEvent()).toBeTrue();
    expect(hasDataLayerEvent('page_view')).toBeTrue();
  });

  function hasDataLayerEvent(eventName: string): boolean {
    return Boolean(
      (window as AnalyticsWindow).dataLayer?.some(
        (entry) =>
          (Array.isArray(entry) &&
            entry[0] === 'event' &&
            entry[1] === eventName) ||
          (!Array.isArray(entry) && entry['event'] === eventName),
      ),
    );
  }

  function hasGtmStartEvent(): boolean {
    return Boolean(
      (window as AnalyticsWindow).dataLayer?.some(
        (entry) =>
          !Array.isArray(entry) &&
          entry['event'] === 'gtm.js' &&
          typeof entry['gtm.start'] === 'number',
      ),
    );
  }
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CookiePopupComponent } from './cookie-popup.component';
import { COOKIE_CONSENT_STORAGE_KEY } from '../services/cookie-consent.service';

describe('CookiePopupComponent', () => {
  const storageKey = COOKIE_CONSENT_STORAGE_KEY;
  let component: CookiePopupComponent;
  let fixture: ComponentFixture<CookiePopupComponent>;

  beforeEach(async () => {
    window.localStorage.removeItem(storageKey);

    await TestBed.configureTestingModule({
      imports: [CookiePopupComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CookiePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    window.localStorage.removeItem(storageKey);
    document.body.style.overflow = '';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide after accepting preferences', () => {
    component.acceptAll();

    const savedConsent = JSON.parse(
      window.localStorage.getItem(storageKey) ?? '{}',
    ) as { preferences?: { analytics?: boolean } };

    expect(component.showPopup).toBeFalse();
    expect(savedConsent.preferences?.analytics).toBeTrue();
    expect(document.body.style.overflow).toBe('');
  });

  it('should close the popup without saving consent before opening policy pages', () => {
    component.openPolicyPage();

    expect(component.showPopup).toBeFalse();
    expect(component.showPreferences).toBeFalse();
    expect(window.localStorage.getItem(storageKey)).toBeNull();
    expect(document.body.style.overflow).toBe('');
  });
});

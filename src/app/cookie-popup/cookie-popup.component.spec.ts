import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiePopupComponent } from './cookie-popup.component';

describe('CookiePopupComponent', () => {
  const storageKey = 'sprintpark_cookie_preferences_v2';
  let component: CookiePopupComponent;
  let fixture: ComponentFixture<CookiePopupComponent>;

  beforeEach(async () => {
    window.localStorage.removeItem(storageKey);

    await TestBed.configureTestingModule({
      imports: [CookiePopupComponent],
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

    expect(component.showPopup).toBeFalse();
    expect(window.localStorage.getItem(storageKey)).not.toBeNull();
    expect(document.body.style.overflow).toBe('');
  });
});

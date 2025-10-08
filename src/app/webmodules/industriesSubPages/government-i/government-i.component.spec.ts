import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentIComponent } from './government-i.component';
import { provideRouter } from '@angular/router';

describe('GovernmentIComponent', () => {
  let component: GovernmentIComponent;
  let fixture: ComponentFixture<GovernmentIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentIComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(GovernmentIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

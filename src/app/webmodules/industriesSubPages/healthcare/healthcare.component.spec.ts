import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareIComponent } from './healthcare.component';

describe('HealthcareComponent', () => {
  let component: HealthcareIComponent;
  let fixture: ComponentFixture<HealthcareIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthcareIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareIComponent } from './health-care-i.component';

describe('HealthCareIComponent', () => {
  let component: HealthCareIComponent;
  let fixture: ComponentFixture<HealthCareIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthCareIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCareIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareServiceUtilComponent } from './software-service-util.component';

describe('SoftwareServiceUtilComponent', () => {
  let component: SoftwareServiceUtilComponent;
  let fixture: ComponentFixture<SoftwareServiceUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareServiceUtilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareServiceUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

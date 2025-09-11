import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingIComponent } from './manufacturing.component';

describe('ManufacturingComponent', () => {
  let component: ManufacturingIComponent;
  let fixture: ComponentFixture<ManufacturingIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturingIComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManufacturingIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

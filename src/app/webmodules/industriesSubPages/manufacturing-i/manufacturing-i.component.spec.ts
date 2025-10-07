import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingIComponent } from './manufacturing-i.component';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';

describe('ManufacturingIComponent', () => {
  let component: ManufacturingIComponent;
  let fixture: ComponentFixture<ManufacturingIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturingIComponent],
 providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturingIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

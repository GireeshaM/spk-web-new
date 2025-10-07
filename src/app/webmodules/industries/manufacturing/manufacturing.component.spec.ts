import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingComponent } from './manufacturing.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ManufacturingComponent', () => {
  let component: ManufacturingComponent;
  let fixture: ComponentFixture<ManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturingComponent],
         providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          params: of({}),  // or whatever params you want to mock
          snapshot: { paramMap: { get: () => null } },
          // add more mocks if your component uses them
        }
      }
    ],
    }).compileComponents();

    fixture = TestBed.createComponent(ManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

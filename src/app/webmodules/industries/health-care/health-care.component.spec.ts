import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareComponent } from './health-care.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('HealthCareComponent', () => {
  let component: HealthCareComponent;
  let fixture: ComponentFixture<HealthCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthCareComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // or whatever params you want to mock
            snapshot: { paramMap: { get: () => null } },
            // add more mocks if your component uses them
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HealthCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent],
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

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

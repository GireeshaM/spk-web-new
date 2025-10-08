import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsBlogComponent } from './insights-blog.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('InsightsBlogComponent', () => {
  let component: InsightsBlogComponent;
  let fixture: ComponentFixture<InsightsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightsBlogComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ section: 'marketing' })),
            // add other observables if your component uses them
            queryParams: of({}),
            fragment: of(null),
            data: of({}),
            url: of([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

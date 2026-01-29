import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { JobSummaryComponent } from './job-summary.component';

describe('JobSummaryComponent', () => {
  let component: JobSummaryComponent;
  let fixture: ComponentFixture<JobSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JobSummaryComponent, // standalone
        RouterTestingModule, // provides ActivatedRoute
        HttpClientTestingModule, // ✅ provides HttpClient for JobService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JobSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JobService, Job } from '../services/job.service';

@Component({
  selector: 'app-job-summary',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './job-summary.component.html',
  styleUrl: './job-summary.component.scss',
})
export class JobSummaryComponent implements OnInit {
  /* ================= DEPENDENCIES ================= */
  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);
  private readonly jobService = inject(JobService);

  /* ================= STATE ================= */
  public job!: Job;
  public applyForm!: FormGroup;
  public selectedFileName = '';

  /* ================= LIFECYCLE ================= */
  public ngOnInit(): void {
    this.initApplyForm();

    this.route.paramMap.subscribe((params) => {
      const jobId = params.get('jobId');
      if (jobId) {
        this.loadJob(jobId);
      }
    });
  }

  /* ================= APPLY FORM ================= */
  private initApplyForm(): void {
    this.applyForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      experience: [
        '',
        [Validators.required, Validators.min(0), Validators.max(50)],
      ],
      resume: [null, Validators.required],
    });
  }

  /* ================= FILE CHANGE ================= */
  public onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    if (file.type !== 'application/pdf') {
      this.applyForm.get('resume')?.setErrors({ fileType: true });
      this.selectedFileName = '';
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      this.applyForm.get('resume')?.setErrors({ fileSize: true });
      this.selectedFileName = '';
      return;
    }

    this.selectedFileName = file.name;
    this.applyForm.patchValue({ resume: file });
    this.applyForm.get('resume')?.updateValueAndValidity();
  }

  /* ================= SUBMIT ================= */
  public submitForm(): void {
    if (this.applyForm.invalid || !this.job) {
      this.applyForm.markAllAsTouched();
      return;
    }

    const payload = {
      ...this.applyForm.value,
      jobId: this.job.jobId,
    };

    // keep payload intentionally (future API call)
    void payload;
  }

  /* ================= LOAD JOB ================= */
  private loadJob(jobId: string): void {
    this.jobService.getJobById(jobId).subscribe({
      next: (job) => {
        if (job) {
          this.job = job;
        }
      },
    });
  }
}

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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-job-summary',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ToastModule],
  providers: [MessageService],
  templateUrl: './job-summary.component.html',
  styleUrl: './job-summary.component.scss',
})
export class JobSummaryComponent implements OnInit {
  /* ================= DEPENDENCIES ================= */
  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);
  private readonly jobService = inject(JobService);
  private readonly messageService = inject(MessageService);

  /* ================= STATE ================= */
  public job!: Job;
  public applyForm!: FormGroup;

  public selectedFile: File | null = null;
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
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
      ],
      experience: [
        '',
        [Validators.required, Validators.min(0), Validators.max(50)],
      ],
    });
  }

  /* ================= FILE CHANGE ================= */
  public onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (file.type !== 'application/pdf') {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid File',
        detail: 'Only PDF files are allowed',
      });
      input.value = '';
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      this.messageService.add({
        severity: 'error',
        summary: 'File Too Large',
        detail: 'Max file size is 2MB',
      });
      input.value = '';
      return;
    }
    this.selectedFile = file;
    this.selectedFileName = file.name;
  }

  /* ================= SUBMIT ================= */
  public submitForm(e: Event): void {
    e.preventDefault();

    if (this.applyForm.invalid || !this.selectedFile) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Incomplete Form',
        detail: 'Please fill all fields and upload resume',
      });
      return;
    }

    emailjs
      .sendForm(
        'service_j07jrmv',
        'template_iys8t94',
        e.target as HTMLFormElement,
        'RqHEh2bb5Kq3zVphS'
      )
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Application Sent',
          detail: 'Your application was submitted successfully',
        });

        this.applyForm.reset();
        this.selectedFile = null;
        this.selectedFileName = '';
      })
      .catch(() => {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: 'Email service error. Try again later.',
        });
      });
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

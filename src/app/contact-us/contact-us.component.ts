import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import emailjs from '@emailjs/browser';

/* ================= FAQ INTERFACE ================= */
export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, RouterLink],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  providers: [MessageService],
})
export class ContactUsComponent implements OnInit {
  /* ================= DEPENDENCIES ================= */
  private readonly fb = inject(FormBuilder);
  private readonly messageService = inject(MessageService);

  /* ================= FORM ================= */
  public contactForm!: FormGroup;

  /* ================= LIFECYCLE ================= */
  public ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      // subject: ['', [Validators.required, Validators.minLength(3)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[6-9][0-9]{9}$'), // Indian mobile numbers
        ],
      ],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  public submitForm(e: Event): void {
    e.preventDefault();

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    emailjs
      .sendForm(
        'service_j07jrmv',
        'template_v0oy7ti',
        e.target as HTMLFormElement,
        'RqHEh2bb5Kq3zVphS',
      )
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Message Sent',
          detail: 'Your contact shared successfully.',
        });

        this.contactForm.reset();
      })
      .catch(() => {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: 'Something went wrong. Please try again.',
        });
      });
  }

  /* ================= FAQ DATA ================= */
  public faqItems: FaqItem[] = [
    {
      question: 'What services does your company offer?',
      answer:
        'We specialize in custom software development, mobile and web applications, UI/UX design, and IT consulting solutions tailored to your business needs.',
      isOpen: false,
    },
    {
      question: 'Do you offer both web and mobile app development?',
      answer:
        'Yes, at SprintPark we offer both web and mobile app development, delivering customized solutions to meet your business needs.',
      isOpen: false,
    },
    {
      question: 'What industries do you serve?',
      answer:
        'We serve diverse industries including healthcare, education, finance, retail, and technology, providing tailored digital solutions for each sector.',
      isOpen: false,
    },
    {
      question: 'How do you ensure quality and security in your projects?',
      answer:
        'We ensure quality and security through rigorous testing, code reviews, and strict compliance with industry best practices and security standards.',
      isOpen: false,
    },
  ];

  /* ================= FAQ TOGGLE ================= */
  public toggleFAQ(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}

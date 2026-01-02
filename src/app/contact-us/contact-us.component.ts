import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  providers: [MessageService],
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  // ✅ FAQ DATA 
    public faqItems = [
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
  // ✅ FAQ TOGGLE
  toggleFAQ(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SeoService } from '../services/seo.service';

import { WhatCompComponent } from '../webmodules/utilities/mainServicesUtil/what-comp/what-comp.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    CommonModule,
    WhatCompComponent,
    RouterLink,
    FormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
  animations: [
    trigger('imageAnim', [
      state('hide', style({ opacity: 0, transform: 'translateY(60px)' })),
      state('show', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hide => show', animate('800ms ease-out')),
      transition('show => hide', animate('0ms')),
    ]),
    trigger('slideFromRight', [
      state('hide', style({ opacity: 0, transform: 'translateX(80px)' })),
      state('show', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hide => show', animate('800ms 300ms ease-out')),
      transition('show => hide', animate('0ms')),
    ]),
    trigger('slideFromLeft', [
      state('hide', style({ opacity: 0, transform: 'translateX(-80px)' })),
      state('show', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hide => show', animate('800ms 500ms ease-out')),
      transition('show => hide', animate('0ms')),
    ]),
  ],
})
export class CareersComponent implements OnInit, AfterViewInit, OnDestroy {
  private router = inject(Router);
  private messageService = inject(MessageService);
  private seoService = inject(SeoService);
  /* ================= PLATFORM ================= */
  public searchText = '';
  private readonly platformId = inject(PLATFORM_ID);

  /* ================= VIEW ================= */
  @ViewChildren('observeMe')
  public elements!: QueryList<ElementRef>;

  private observer: IntersectionObserver | null = null;

  /* ================= HERO CONTENT ================= */
  public whatMainHeader = 'Careers';
  public whatDescription =
    'SprintPark’s software services deliver customized, high-performance solutions that accelerate digital growth.';
  public heroImage = 'assets/careers/caree.jpeg';
  public smallImage = 'assets/careers/caree.jpeg';

  /* ================= ANIMATION STATE ================= */
  public imageVisible = false;

  public buttonStates: { btn1: boolean; btn2: boolean; btn3: boolean } = {
    btn1: false,
    btn2: false,
    btn3: false,
  };

  public onSearch(): void {
    const keyword = this.searchText.trim().toLowerCase();

    if (!keyword) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Search Required',
        detail: 'Please enter a job title to search',
      });
      return;
    }

    const matchedJob = this.jobs.find((job) =>
      job.title.toLowerCase().includes(keyword),
    );

    if (!matchedJob) {
      this.messageService.add({
        severity: 'error',
        summary: 'Job Not Found',
        detail: 'No job matches your search',
      });
      return;
    }

    // ✅ Redirect when matched
    this.router.navigate(['/job-summary', matchedJob.jobId]);
  }

  /* ================= LIFECYCLE ================= */
  public ngOnInit(): void {
    this.seoService.setMetaForPage('careers');
  }

  public ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.getAttribute('data-anim-id');
            switch (id) {
              case 'image':
                this.imageVisible = entry.isIntersecting;
                break;
              case 'btn1':
                this.buttonStates.btn1 = entry.isIntersecting;
                break;
              case 'btn2':
                this.buttonStates.btn2 = entry.isIntersecting;
                break;
              case 'btn3':
                this.buttonStates.btn3 = entry.isIntersecting;
                break;
            }
          });
        },
        { threshold: 0.2 },
      );

      this.elements.forEach((el) => this.observer!.observe(el.nativeElement));
    }
  }

  public ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  /* ================= JOB LIST ================= */
  public jobs = [
    {
      jobId: 'HR-001',
      title: 'Senior HR Manager',
      description:
        'SprintPark is looking for an experienced HR professional to act as the primary HR SPOC for our onshore leadership teams and manage end-to-end HR operations.',
      type: 'Full time',
      experience: '10+ years',
      location: 'Hyderabad',
    },
    {
      jobId: 'FSD-001',
      title: 'Full Stack Developer',
      description:
        ' We are seeking a highly skilled and passionate Java Full Stack Developer who can contribute across all layers of our technology stack',
      type: 'Full time',
      experience: '3-6 years',
      location: 'Hyderabad',
    },
    {
      jobId: 'SF-001',
      title: 'Salesforce Developer',
      description:
        'Meeting with project managers to determine CRM needs and developing customized solutions within Salesforce.',
      type: 'Full time',
      experience: '5-6 years',
      location: 'Hyderabad',
    },
    {
      jobId: 'AI-001',
      title: 'Google ADK/Vertex Al Developer',
      description:
        'We are seeking skilled Developers with hands-on experience in Google ADK, Vertex Al, and Python to join our Al/ML product development team. ',
      type: 'Full time',
      experience: '2-5 years',
      location: 'Hyderabad',
    },
    {
      jobId: 'FSD-002',
      title: 'Full Stack Developer',
      description:
        ' We are seeking a highly skilled and passionate Java Full Stack Developer to contribute across all layers of our technology stack.',
      type: 'Full time',
      experience: '3-6 years',
      location: 'Hyderabad',
    },
    {
      jobId: 'BSR-001',
      title: 'Bench Sales Recruiter',
      description:
        'We are looking for a Bench Sales Recruiter (Freshers) to join our US IT Staffing team. This role involves marketing bench consultants, coordinating with vendors and clients.',
      type: 'Full time',
      experience: '0-1 Years',
      location: 'Hyderabad',
    },
    {
      jobId: 'AI-002',
      title: 'AI Specialist / Machine Learning Engineer',
      description:
        'We are seeking a skilled and forward-thinking AI Specialist to design, develop, and deploy advanced AI/ML solutions.',
      type: 'Full time',
      experience: '3–7 Years',
      location: 'Hyderabad',
    },
  ];

  /* ================= LIFE @ SPRINTPARK ================= */
  public whyMainHeading = 'Life@Sprintpark';
  public whySubHeading =
    'Your Trusted Partner for Comprehensive Software Solutions';
  public whyContent =
    'SprintPark delivers tailored AI, data analytics, cybersecurity, and Salesforce services to boost efficiency and growth.';

  public whyCards = [
    {
      title: 'Learning',
      desc: 'Every employee gets opportunities to share ideas and grow.',
    },
    {
      title: 'Employee Growth',
      desc: 'We provide a workplace where employees can thrive.',
    },
    {
      title: 'Work Environment',
      desc: 'A collaborative environment that empowers balance and innovation.',
    },
    {
      title: 'Professional Development',
      desc: 'We empower personal and professional growth.',
    },
    {
      title: 'Compensation & Benefits',
      desc: 'Competitive benefits that reward performance and well-being.',
    },
  ];

  public teamImages = {
    left: {
      src: 'assets/careers/team-1.png',
      alt: 'Team 1',
    },
    right: [
      {
        src: 'assets/careers/team-2.png',
        alt: 'Team 2',
        extraClass: 'mb-3',
      },
      {
        src: 'assets/careers/team-3.png',
        alt: 'Team 3',
      },
    ],
  };
}

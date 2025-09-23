import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
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
import { MainHeroSectionComponent } from '../webmodules/utilities/main-hero-section/main-hero-section.component';
import { WhatCompComponent } from '../webmodules/utilities/mainServicesUtil/what-comp/what-comp.component';
@Component({
  standalone: true,
  selector: 'app-careers',
  imports: [CommonModule, MainHeroSectionComponent, WhatCompComponent],
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
export class CareersComponent implements AfterViewInit, OnDestroy {
  public whatMainHeader = 'Careers';
  public whatDescription ='SprintPark’s software services deliver customized, high-performance solutions that accelerate digital growth. From development to deployment, we ensure scalable, secure, and user-centric applications.';
  public heroImage = 'assets/careers/caree.jpeg';
  public smallImage = 'assets/careers/caree.jpeg';
  imageVisible = false;
  buttonStates: { btn1: boolean; btn2: boolean; btn3: boolean } = {
    btn1: false,
    btn2: false,
    btn3: false,
  };
  @ViewChildren('observeMe') elements!: QueryList<ElementRef>;
  private observer: IntersectionObserver | null = null;
  private platformId = inject(PLATFORM_ID);
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

  public jobs = [
    {
      title: 'Networking Lead',
      description:
        'We are seeking a skilled and proactive Networking Lead to oversee the design, implementation, and maintenance of our organization’s network infrastructure. The ideal candidate will lead a team of network engineers and administrators, ensuring high availability, security, and scalability of the network to support business operations.',
      type: 'Full time',
      experience: '5-6 years',
      location: 'Hyderabad',
    },
    {
      title: 'Salesforce Developer',
      description:
        'Meeting with project managers to determine CRM needs. Developing customized solutions within the Salesforce platform. Designing, coding, and implementing Salesforce applications. Creating timelines and development goals. Testing the stability and functionality of the application. Troubleshooting and fixing bugs.',
      type: 'Full time',
      experience: '5-6 years',
      location: 'Hyderabad',
    },
    {
      title: 'Bench Sales Manager',
      description:
        'We are seeking a dynamic and results-driven Bench Sales Manager to oversee and lead our IT bench sales operations. The ideal candidate will be responsible for marketing and placing IT consultants (bench candidates) on contract assignments with clients and partners across the U.S. market. The Bench Sales Manager will build strong relationships with vendors',
      type: 'Full time',
      experience: '5+ years',
      location: 'Hyderabad',
    },
    {
      title: 'Sales and Marketing Head',
      description:
        'We are looking for a visionary and results-driven Sales and Marketing Head to lead our sales and marketing initiatives. The ideal candidate will be responsible for developing strategies to drive revenue growth, build brand awareness, and expand market share. This role requires strong leadership, strategic thinking, and hands on execution to achieve ambitious business.',
      type: 'Full time',
      experience: '8+ years',
      location: 'Hyderabad',
    },
    {
      title: 'Digital Marketing Executive',
      description:
        'We are looking for a creative and results-oriented Digital Marketing Executive to help drive our online marketing efforts. The ideal candidate will be responsible for planning, executing, and optimizing digital campaigns across multiple channels to increase brand awareness, generate leads, and support business growth.',
      type: 'Full time',
      experience: '1-3 years',
      location: 'Hyderabad',
    },
    {
      title: 'UI/UX Designer',
      description:
        'We are seeking a creative and detail-oriented UI/UX Designer to design intuitive, engaging, and user-friendly interfaces for our web and mobile applications. The ideal candidate will translate user needs and business goals into seamless and visually appealing digital experiences. Design wireframes, prototypes, and high-fidelity mockups for web and mobile',
      type: 'Full time',
      experience: '5+ years',
      location: 'Hyderabad',
    },
  ];
  // Section 3
  public whyMainHeading = 'Life@Sprintpark';
  public whySubHeading =
    'Your Trusted Partner for Comprehensive Software Solutions';
  public whyContent =
    'SprintPark delivers tailored AI, data analytics, cybersecurity, and Salesforce services to boost your efficiency, security, and growth.';
  public whyCards = [
    {
      title: 'Learning ',
      desc: "Every employee should get their fair share of opportunities to share their ideas and become a part of organization's success.",
    },
    {
      title: 'Employee growth',
      desc: 'We are dedicated to providing a workplace where employees can grow and thrive.',
    },
    {
      title: 'Work Environment',
      desc: 'We foster a supportive and collaborative work environment that empowers growth, balance, and innovation.',
    },
    {
      title: 'Professional Development',
      desc: 'We are committed to empower our team to grow personally and professionally.',
    },
    {
      title: 'Compensation & Benefits',
      desc: 'Compensations and benefits reward employees fairly while enhancing their growth and well-being.',
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
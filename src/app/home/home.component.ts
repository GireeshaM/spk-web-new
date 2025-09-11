import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
  OnInit,
  PLATFORM_ID,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(60px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(
        'hidden => visible',
        animate('700ms cubic-bezier(0.23, 1, 0.32, 1)'),
      ),
      transition('visible => hidden', animate('0ms')),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public btn1 = { label: 'Get started with AI', style: 'btn-warning' };
  public btn2 = { label: "Let's talk", style: 'btn-outline-light' };
  public slides = [
    {
      image: 'assets/Compressed-home/section-1-compressed-hero/carousel-1.jpg',
      title: 'Next-Gen Software',
      subtitle: 'Smarter software, better solutions.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/Compressed-home/section-1-compressed-hero/carousel-2.jpg',
      title: 'Talent Solution',
      subtitle: 'Right people, Right fit.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/Compressed-home/section-1-compressed-hero/carousel-3.jpg',
      title: 'Tech Evolution Partners',
      subtitle: 'Smart Solutions, Clear Direction.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/Compressed-home/section-1-compressed-hero/carousel-4.jpg',
      title: 'Smart Product Rollouts',
      subtitle: 'From Code to Clients.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/Compressed-home/section-1-compressed-hero/carousel-5.jpg',
      title: 'From Plan to Launch',
      subtitle: 'Smart.Agile.Delivered',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/Compressed-home/section-1-compressed-hero/carousel-6.jpg',
      title: 'Future in Focus',
      subtitle: "Get Ready for what's next in innovation  .",
      btn1: this.btn1,
      btn2: this.btn2,
    },
  ];
  public responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];
  public ngOnInit(): void {
    this.offerCardVisible = this.whatWeOffer.map(() => false);
  }

  public ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.checkInView();
      this.onScroll();
      this.checkMobile();

      if (!this.isBrowser) return;
      setTimeout(() => {
        this.observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const index = this.statElements
                  .toArray()
                  .findIndex((el) => el.nativeElement === entry.target);

                if (index !== -1 && !this.stats[index].animated) {
                  this.stats[index].animated = true;

                  this.animateStat(index);
                  this.observer.unobserve(entry.target);
                }
              }
            });
          },
          { threshold: 0.3 },
        );

        this.statElements.forEach((el) => {
          this.observer.observe(el.nativeElement);
        });
      }, 100);
    }
  }

  @HostListener('window:scroll')
  public onScroll(): void {
    if (!this.isBrowser) return;

    this.offerCards.forEach((card, i) => {
      const rect = card.nativeElement.getBoundingClientRect();
      this.offerCardVisible[i] =
        rect.top < window.innerHeight && rect.bottom > 0;
    });

    this.checkInView();
  }

  public checkInView(): void {
    if (!this.isBrowser) return;

    const imageEl = document.querySelector('.image-wrapper');
    if (imageEl) {
      const rect = imageEl.getBoundingClientRect();
      this.imageInView = rect.top < window.innerHeight && rect.bottom > 0;
    }

    const contentEl = document.querySelector('.move-right > div');
    if (contentEl) {
      const rect = contentEl.getBoundingClientRect();
      this.contentInView = rect.top < window.innerHeight && rect.bottom > 0;
    }

    if (this.featureGrid) {
      const rect = this.featureGrid.nativeElement.getBoundingClientRect();
      this.featuresInView = rect.top < window.innerHeight && rect.bottom > 0;
    }
  }

  // what we offer

  @ViewChildren('offerCard') offerCards!: QueryList<ElementRef>;
  public offerCardVisible: boolean[] = [];
  public whatWeOffer = [
    {
      img: 'assets/Compressed-home/section-3-what-we-offer/software-services.png',
      title: 'Software services',
      desc: 'Custom software solutions designed to meet your unique business needs.',
    },
    {
      img: 'assets/Compressed-home/section-3-what-we-offer/It_consulting.png',
      title: 'IT Consulting',
      desc: 'Expert guidance and strategic solutions to overcome challenges and drive your business.',
    },
    {
      img: 'assets/Compressed-home/section-3-what-we-offer/staffing-solutions.png',
      title: 'Staffing Solutions',
      desc: "Connect with the right talent to drive your organization's growth and success.",
    },
  ];

  // Features
  public imageInView = false;
  public contentInView = false;
  public featuresInView = false;
  @ViewChild('featureGrid') featureGrid!: ElementRef;

  public features = [
    {
      img: 'assets/Compressed-home/section-2-abt-sprintpark/integrity.png',
      title: 'Integrity',
      desc: 'Upholding honesty in all dealings',
    },
    {
      img: 'assets/Compressed-home/section-2-abt-sprintpark/team-work.png',
      title: 'Team Work',
      desc: 'Collaborating to achieve shared success',
    },
    {
      img: 'assets/Compressed-home/section-2-abt-sprintpark/commitment.png',
      title: 'Commitment',
      desc: 'Dedicated to exceeding client expectations',
    },
    {
      img: 'assets/Compressed-home/section-2-abt-sprintpark/diversity.png',
      title: 'Diversity',
      desc: 'Embracing differences to drive innovation',
    },
  ];

  public collaborations = [
    {
      img: 'assets/Compressed-home/section-5-collaborate-section/collaborate-1.png',
      alt: 'Expert Team',
      title: 'Assemble Your Expert Team',
      desc: 'Reach out to us, and we’ll assign professionals perfectly suited to your project’s needs.',
    },
    {
      img: 'assets/Compressed-home/section-5-collaborate-section/collaborate-2.png',
      alt: 'Objectives',
      title: 'Define Your Objectives Clearly',
      desc: 'Engage in a strategic consultation to uncover your goals, challenges, and priorities.',
    },
    {
      img: 'assets/Compressed-home/section-5-collaborate-section/collaborate-3.png',
      alt: 'Strategy',
      title: 'Develop a Custom Strategy',
      desc: 'Receive a personalized, flexible plan tailored to solve your unique business challenges.',
    },
    {
      img: 'assets/Compressed-home/section-5-collaborate-section/collaborate-4.png',
      alt: 'Execute',
      title: 'Execute with Confidence',
      desc: 'Our expert team and 24/7 support ensure seamless delivery and ongoing success.',
    },
    {
      img: 'assets/Compressed-home/section-5-collaborate-section/collaborate-5.png',
      alt: 'Expectations',
      title: 'Set Clear Expectations',
      desc: 'Align on requirements, limitations, and success criteria to ensure shared understanding.',
    },
    {
      img: 'assets/Compressed-home/section-5-collaborate-section/collaborate-6.png',
      alt: 'Objectives',
      title: 'Measure and Optimize Performance',
      desc: 'Monitor results, refine strategies, and drive continuous improvement for success.',
    },
  ];

  // Industries
  public industries = [
    {
      img: 'assets/Compressed-home/secton-4-industries/industry-it-telecommunications.jpg',
      alt: 'IT & TeleCommunications',
      title: 'IT & TeleCommunications',
    },
    {
      img: 'assets/Compressed-home/secton-4-industries/industries-healthcare.jpg',
      alt: 'Healthcare & Life Sciences',
      title: 'Healthcare & Life Sciences',
    },
    {
      img: 'assets/Compressed-home/secton-4-industries/industry-education.jpg',
      alt: 'Education',
      title: 'Education',
    },
    {
      img: 'assets/Compressed-home/secton-4-industries/industries-government.jpg',
      alt: 'Government',
      title: 'Government',
    },
  ];

  public stats = [
    {
      img: 'assets/Compressed-home/section-6/satisfied-clients.png',
      target: 4386,
      current: 0,
      label: 'Satisfied Clients',
      animated: false,
    },
    {
      img: 'assets/Compressed-home/section-6/finished-projects.png',
      target: 400,
      current: 0,
      label: 'Finished projects',
      animated: false,
    },
    {
      img: 'assets/Compressed-home/section-6/skilled-experts.png',
      target: 250,
      current: 0,
      label: 'Skilled experts',
      animated: false,
    },
    {
      img: 'assets/Compressed-home/section-6/media-posts.png',
      target: 4386,
      current: 0,
      label: 'Media posts',
      animated: false,
    },
  ];
  public ourInsightsSlides = [
    {
      image: 'assets/Compressed-home/section-7-our-insights/our-insights-3.jpg',
      title: "Salesforce's Commitment to Data Security and Privacy Excellence",
      description: 'Read More >>',
    },
    {
      image: 'assets/Compressed-home/section-7-our-insights/our-insights-2.jpg',
      title: 'Salesforce Marketing Cloud Empowers Marketing of Businesses',
      description: 'Read More >>',
    },
    {
      image: 'assets/Compressed-home/section-7-our-insights/our-insights-1.jpg',
      title: 'Salesforce Health Cloud transform Payer sector in Healthcare',
      description: 'Read More >>',
    },
  ];

  public testimonials = [
    {
      img: 'assets/Compressed-home/section-8-testinomials/review-1.png',
      name: 'Maria Sans',
      role: 'Co-founder - Zent Technologies',
      rating: 4,
      text: 'Sprintpark has delivered excellent services to deliver our AI products. They have given us innovative solutions. Happy client :)',
    },
    {
      img: 'assets/Compressed-home/section-8-testinomials/review-2.png',
      name: 'Maria Sans',
      role: 'Co-founder - Zent Technologies',
      rating: 4,
      text: 'Sprintpark has delivered excellent services to deliver our AI products. They have given us innovative solutions. Happy client :)',
    },
  ];
  public currentInsightIndex = 1; // Start with the middle card (or 0 for first)
  public isMobile = false;

  @HostListener('window:resize')
  public onResize(): void {
    this.checkMobile();
  }

  public checkMobile(): void {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth < 768;
    }
  }

  public moveInsight(step: number): void {
    const newIndex = this.currentInsightIndex + step;
    if (newIndex >= 0 && newIndex < this.ourInsightsSlides.length) {
      this.currentInsightIndex = newIndex;
    }
  }
  public onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.moveInsight(1);
    }
  }

  @ViewChildren('statElements') statElements!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  cdRef = inject(ChangeDetectorRef);

  private animateStat(index: number): void {
    const stat = this.stats[index];
    const duration = 2000;
    const steps = 60;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      stat.current = Math.floor(stat.target * progress);
      this.cdRef.detectChanges();
      // console.log(`Animating: ${stat.label}`);

      if (currentStep >= steps) {
        stat.current = stat.target;
        clearInterval(interval);
      }
    }, duration / steps);
  }
}

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
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CarouselModule, CommonModule,RouterLink],
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
      image: 'assets/home/hero-carousel/next-gen-software.jpeg',
      title: 'Next-Gen Software',
      subtitle: 'Smarter software, better solutions.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/home/hero-carousel/talent-solutions.png',
      title: 'Talent Solution',
      subtitle: 'Right people, Right fit.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/home/hero-carousel/tech-evolution-partners.jpg',
      title: 'Tech Evolution Partners',
      subtitle: 'Smart Solutions, Clear Direction.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/home/hero-carousel/smartproductrollout.png',
      title: 'Smart Product Rollouts',
      subtitle: 'From Code to Clients.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/home/hero-carousel/plan-to-launch.jpg',
      title: 'From Plan to Launch',
      subtitle: 'Smart.Agile.Delivered',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/home/hero-carousel/future-in-focus.jpg',
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
      img: 'assets/home/whatWeOffer/software-services.png',
      title: 'Software services',
      desc: 'Custom software solutions designed to meet your unique business needs.',
    },
    {
      img: 'assets/home/whatWeOffer/It_consulting.png',
      title: 'IT Consulting',
      desc: 'Expert guidance and strategic solutions to overcome challenges and drive your business.',
    },
    {
      img: 'assets/home/whatWeOffer/staffing-solutions.png',
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
      img: 'assets/home/about-sprintpark/integrity.png',
      title: 'Integrity',
      desc: 'Upholding honesty in all dealings',
    },
    {
      img: 'assets/home/about-sprintpark/team-work.svg',
      title: 'Team Work',
      desc: 'Collaborating to achieve shared success',
    },
    {
      img: 'assets/home/about-sprintpark/commitment.svg',
      title: 'Commitment',
      desc: 'Dedicated to exceeding client expectations',
    },
    {
      img: 'assets/home/about-sprintpark/diversity.svg',
      title: 'Diversity',
      desc: 'Embracing differences to drive innovation',
    },
  ];

  public collaborations = [
    {
      img: 'assets/home/collaborate/expert-team.svg',
      alt: 'Expert Team',
      title: 'Assemble Your Expert Team',
      desc: 'Reach out to us, and we’ll assign professionals perfectly suited to your project’s needs.',
    },
    {
      img: 'assets/home/collaborate/define-objectives.svg',
      alt: 'Objectives',
      title: 'Define Your Objectives Clearly',
      desc: 'Engage in a strategic consultation to uncover your goals, challenges, and priorities.',
    },
    {
      img: 'assets/home/collaborate/clear-strategy.svg',
      alt: 'Strategy',
      title: 'Develop a Custom Strategy',
      desc: 'Receive a personalized, flexible plan tailored to solve your unique business challenges.',
    },
    {
      img: 'assets/home/collaborate/execute-confidence.svg',
      alt: 'Execute',
      title: 'Execute with Confidence',
      desc: 'Our expert team and 24/7 support ensure seamless delivery and ongoing success.',
    },
    {
      img: 'assets/home/collaborate/clear-expectations.svg',
      alt: 'Expectations',
      title: 'Set Clear Expectations',
      desc: 'Align on requirements, limitations, and success criteria to ensure shared understanding.',
    },
    {
      img: 'assets/home/collaborate/measure-optimize.png',
      alt: 'Objectives',
      title: 'Measure and Optimize Performance',
      desc: 'Monitor results, refine strategies, and drive continuous improvement for success.',
    },
  ];

  // Industries
  public industries = [

    {

      img: 'assets/home/industries/industry-it-telecommunications.jpg',

      alt: 'IT & TeleCommunications',

      title: 'IT & TeleCommunications',

       link: '/itAndTelecommunications'

    },

    {

      img: 'assets/home/industries/industries-healthcare.jpg',

      alt: 'Healthcare & Life Sciences',

      title: 'Healthcare & Life Sciences',

      link: '/healthCareAndLifeSciences'

    },

    {

      img: 'assets/home/industries/industry-education.jpg',

      alt: 'Education',

      title: 'Education',

      link: '/education'

    },

    {

      img: 'assets/home/industries/industries-government.jpg',

      alt: 'Government',

      title: 'Government',

      link: '/government'

    },

    {

      img: 'assets/home/industries/transportation.jpg',

      alt: 'Transportation and Logistics',

      title: 'Transportation and Logistics',

      link: '/government'

    },

    {

      img: 'assets/home/industries/banking.jpg',

      alt: 'Government',

      title: 'banking',

      link: '/government'

    },

     {

      img: 'assets/home/industries/manufactuing.jpg',

      alt: 'Government',

      title: 'Manufacuring',

      link: '/government'

    },

  ];
 

  public stats = [
    {
      img: 'assets/home/statistics/satisfied-clients.png',
      target: 4386,
      current: 0,
      label: 'Satisfied Clients',
      animated: false,
    },
    {
      img: 'assets/home/statistics/finished-projects.png',
      target: 400,
      current: 0,
      label: 'Finished projects',
      animated: false,
    },
    {
      img: 'assets/home/statistics/skilled-experts.png',
      target: 250,
      current: 0,
      label: 'Skilled experts',
      animated: false,
    },
    {
      img: 'assets/home/statistics/media-posts.png',
      target: 4386,
      current: 0,
      label: 'Media posts',
      animated: false,
    },
  ];
  public ourInsightsSlides = [
    {
      image: 'assets/home/our-insights/data-security.jpg',
      title: "Salesforce's Commitment to Data Security and Privacy Excellence",
      description: 'Read More >>',
    },
    {
      image: 'assets/home/our-insights/markrting-cloud.jpg',
      title: 'Salesforce Marketing Cloud Empowers Marketing of Businesses',
      description: 'Read More >>',
    },
    {
      image: 'assets/home/our-insights/health-cloud.jpg',
      title: 'Salesforce Health Cloud transform Payer sector in Healthcare',
      description: 'Read More >>',
    },
  ];

  public testimonials = [
    {
      img: 'assets/home/testimonials/testimonial-1.png',
      name: 'Dhruv Raya',
      role: 'Co-founder - Zent Technologies',
      rating: 4,
      text: '“SprintPark quickly understood our requirements and delivered top-quality candidates within tight timelines.”',
    },
    {
      img: 'assets/home/testimonials/testimonial-2.png',
      name: 'Maria Sans',
      role: 'Co-founder - Zent Technologies',
      rating: 4,
      text: '“A highly reliable partner — their team is responsive, professional, and easy to work with.”',
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
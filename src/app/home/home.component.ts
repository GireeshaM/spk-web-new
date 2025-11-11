
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
  imports: [CarouselModule, CommonModule, RouterLink],
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
  viewAll = false;
  groupedTestimonials: any[][] = [];
  currentTestimonialIndex = 0;
  currentIndex = 0;
  cardsPerView = 1;
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
  public ngOnInit(): void {
    this.offerCardVisible = this.whatWeOffer.map(() => false);
    this.checkMobile(); // Set isMobile before grouping
    this.groupTestimonials();
  }
  public ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.checkInView();
      this.onScroll();
      this.checkMobile();
      this.cardsPerView = this.getCardsPerView();
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
    getCardsPerView(): number {
    const width = window.innerWidth;
    if (width >= 992) return 4;
    if (width >= 768) return 2;
    return 1;
  }

  nextSlide() {
    if (this.currentIndex < this.cards.length - this.cardsPerView) this.currentIndex++;
  }

  prevSlide() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
  public groupTestimonials(): void {
    this.groupedTestimonials = []; // Clear previous
    const perSlide = this.isMobile ? 1 : 2; // You can use 3 if needed for desktop
    for (let i = 0; i < this.testimonials.length; i += perSlide) {
      this.groupedTestimonials.push(this.testimonials.slice(i, i + perSlide));
    }
    // Optional: loop the carousel by repeating the first group
    if (this.groupedTestimonials.length > 0) {
      this.groupedTestimonials.push(this.groupedTestimonials[0]);
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
  public toggleViewAll(): void {
    this.viewAll = !this.viewAll;
  }
  public whatWeOffer = [
    {
      img: 'assets/home/whatWeOffer/software-services.png',
      title: 'Software services',
      desc: 'Custom software solutions designed to meet your unique business needs.',
      link: '/software-service',
    },
    {
      img: 'assets/home/whatWeOffer/It_consulting.png',
      title: 'IT Consulting',
      desc: 'Expert guidance and strategic solutions to overcome challenges and drive your business.',
      link: '/it-consulting',
    },
    {
      img: 'assets/home/whatWeOffer/staffing-solutions.png',
      title: 'Staffing Solutions',
      desc: "Connect with the right talent to drive your organization's growth and success.",
      link: '/staffing',
    },
    {
      img: 'assets/home/whatWeOffer/project-management.png',
      title: 'Project-Management',
      desc: 'Seamless project execution with clear timelines, resources, and results.',
      link: '/project-management',
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
   cards = [
   {
      img: 'assets/home/industries/industry-it-telecommunications.jpg',
      alt: 'IT & TeleCommunications',
      title: 'IT & TeleCommunications',
      link: '/itAndTelecommunications',
    },
    {
      img: 'assets/home/industries/industries-healthcare.jpg',
      alt: 'Healthcare & Life Sciences',
      title: 'Healthcare & Life Sciences',
      link: '/healthCareAndLifeSciences',
    },
    {
      img: 'assets/home/industries/industry-education.jpg',
      alt: 'Education',
      title: 'Education',
      link: '/education',
    },
    {
      img: 'assets/home/industries/industries-government.jpg',
      alt: 'Government',
      title: 'Government',
      link: '/government',
    },
    {
      img: 'assets/home/industries/transportation.jpg',
      alt: 'Transportation and Logistics',
      title: 'Transportation and Logistics',
      link: '/transportationAndLogistics',
    },
    {
      img: 'assets/home/industries/banking.jpg',
      alt: 'Banking',
      title: 'Banking',
      link: '/banking',
    },
    {
      img: 'assets/home/industries/manufactuing.jpg',
      alt: 'Manufacturing',
      title: 'Manufacturing',
      link: '/manufacturing',
    },
  ];
  public industries = [
    {
      img: 'assets/home/industries/industry-it-telecommunications.jpg',
      alt: 'IT & TeleCommunications',
      title: 'IT & TeleCommunications',
      link: '/itAndTelecommunications',
    },
    {
      img: 'assets/home/industries/industries-healthcare.jpg',
      alt: 'Healthcare & Life Sciences',
      title: 'Healthcare & Life Sciences',
      link: '/healthCareAndLifeSciences',
    },
    {
      img: 'assets/home/industries/industry-education.jpg',
      alt: 'Education',
      title: 'Education',
      link: '/education',
    },
    {
      img: 'assets/home/industries/industries-government.jpg',
      alt: 'Government',
      title: 'Government',
      link: '/government',
    },
    {
      img: 'assets/home/industries/transportation.jpg',
      alt: 'Transportation and Logistics',
      title: 'Transportation and Logistics',
      link: '/transportationAndLogistics',
    },
    {
      img: 'assets/home/industries/banking.jpg',
      alt: 'Banking',
      title: 'Banking',
      link: '/banking',
    },
    {
      img: 'assets/home/industries/manufactuing.jpg',
      alt: 'Manufacturing',
      title: 'Manufacturing',
      link: '/manufacturing',
    },
  ];
  // Duplicate first 2 items at the end to allow smooth circular scroll
  public industriesCarousel = [
    ...this.industries,
    ...this.industries.slice(0, 2),
  ];
  public responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
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
      route: 'marketing',
    },
    {
      image: 'assets/home/our-insights/markrting-cloud.jpg',
      title: 'Salesforce Marketing Cloud Empowers Marketing of Businesses',
      route: 'flowBuilder',
    },
    {
      image: 'assets/home/our-insights/health-cloud.jpg',
      title: 'Salesforce Health Cloud transform Payer sector in Healthcare',
      route: 'automateYourBusinessThroughSalesforceBuilder',
    },
    {
      image: 'assets/home/our-insights/salesforce-customization.jpeg',
      title:
        ' Exposing the Tempting Benefits of Choosing Salesforce Customization',
      route: 'exploringThePotentialOfSalesforceAnalyticsCloud',
    },
  ];
  // Industries Carousel Logic (Bootstrap-based)
public activeIndustryIndex = 0; // Track the current active slide

public nextIndustrySlide(): void {
  if (this.activeIndustryIndex < this.industries.length - 1) {
    this.activeIndustryIndex++;
  } else {
    this.activeIndustryIndex = 0; // loop back to start
  }
}

public prevIndustrySlide(): void {
  if (this.activeIndustryIndex > 0) {
    this.activeIndustryIndex--;
  } else {
    this.activeIndustryIndex = this.industries.length - 1; // loop to end
  }
}

  public testimonials = [
    {
      img: 'assets/home/testimonials/testimonial-1.png',
      name: 'Ravi Kumar',
      role: 'HR Manager, TechNova Solutions',
      rating: 4,
      text: 'SprintPark quickly understood our requirements and delivered top-quality candidates within tight timelines.”',
    },
    {
      img: 'assets/home/testimonials/testimonial-2.png',
      name: 'Anjali Mehta',
      role: 'Co-founder - Zent Technologies',
      rating: 5,
      text: '“A highly reliable partner — their team is responsive, professional, and easy to work with.”',
    },
    {
      img: 'assets/home/testimonials/vikram_testinomial.png',
      name: 'Vikram Malhotra',
      role: ' Program Manager, Google Cloud',
      rating: 4,
      text: '“Their process is smooth, transparent, and very easy to work with.”',
    },
    {
      img: 'assets/home/testimonials/sofia_testinomial.png',
      name: 'Sophia Johnson',
      role: ' Customer Success Manager, Salesforce',
      rating: 4,
      text: '“ We value SprintPark for consistently providing skilled and reliable professionals.”',
    },
    {
      img: 'assets/home/testimonials/karen_testinomial.png',
      name: 'Karen.S',
      role: ' Enterprise Account Director, Microsoft Azure',
      rating: 4,
      text: '“ The team is supportive, attentive, and always quick to respond.”',
    },
    {
      img: 'assets/home/testimonials/daniel_testinomial.png',
      name: 'Daniel Lee',
      role: 'Technical Consultant, Salesforce CRM',
      rating: 4,
      text: '“SprintPark helped us scale efficiently with the right talent.”',
    },
    {
      img: 'assets/home/testimonials/arun_testinomial.png',
      name: 'Arun Kumar',
      role: ' Partner Solutions Lead, AWS India',
      rating: 4,
      text: '“They take the time to understand our culture and needs.”',
    },
    {
      img: 'assets/home/testimonials/megha_testinomial.png',
      name: 'Megha Sharma',
      role: 'Training & Certification Manager, AWS',
      rating: 4,
      text: '“Professional, efficient, and trustworthy—an excellent partner in staffing.”',
    },
  ];
  public currentInsightIndex = 1; // Start with the middle card (or 0 for first)
  public isMobile = false;
  @HostListener('window:resize')
  public onResize(): void {
     const newCount = this.getCardsPerView();
    if (newCount !== this.cardsPerView) {
      this.cardsPerView = newCount;
      if (this.currentIndex > this.cards.length - this.cardsPerView) {
        this.currentIndex = Math.max(0, this.cards.length - this.cardsPerView);
      }
    }
    const prevMobile = this.isMobile;
    this.checkMobile();
    if (prevMobile !== this.isMobile) {
      this.groupTestimonials();
    }
  }
  public checkMobile(): void {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth < 768;
    }
  }
  public get isFourCardsVisible(): boolean {
    return this.currentInsightIndex < this.ourInsightsSlides.length - 2;
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

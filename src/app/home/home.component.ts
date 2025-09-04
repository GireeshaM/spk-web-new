import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
declare var bootstrap: any;
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
        animate('700ms cubic-bezier(0.23, 1, 0.32, 1)')
      ),
      transition('visible => hidden', animate('0ms')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  
  btn1 = { label: 'Get started with AI', style: 'btn-warning' };
  btn2 = { label: "Let's talk", style: 'btn-outline-light' };
  slides = [
    {
      image: 'assets/home/carousel/carousel-1.png',
      title: 'Next-Gen Software',
      subtitle: 'Smarter software, better solutions.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/home/carousel/carousel-2.png',
      title: 'Talent Solution',
      subtitle: 'Right people, Right fit.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/home/carousel/carousel-3.png',
      title: 'Tech Evolution Partners',
      subtitle: 'Smart Solutions, Clear Direction.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/home/carousel/carousel-4.png',
      title: 'Smart Product Rollouts',
      subtitle: 'From Code to Clients.',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/home/carousel/carousel-5.png',
      title: 'From Plan to Launch',
      subtitle: 'Smart.Agile.Delivered',
      btn1: this.btn1,
      btn2: this.btn2,
    },
    {
      image: 'assets/home/carousel/carousel-6.png',
      title: 'Future in Focus',
      subtitle: "Get Ready for what's next in innovation  .",
      btn1: this.btn1,
      btn2: this.btn2,
    },
  ];
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];
  ngOnInit() {
    
    this.offerCardVisible = this.whatWeOffer.map(() => false);
    this.checkMobile();
  }

  ngAfterViewInit() {
    this.checkInView();
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.offerCards.forEach((card, i) => {
      const rect = card.nativeElement.getBoundingClientRect();
      this.offerCardVisible[i] =
        rect.top < window.innerHeight && rect.bottom > 0;
    });
    this.checkInView();
  }

  checkInView() {
    // Get the left image element
    const imageEl = document.querySelector('.image-wrapper');
    if (imageEl) {
      const rect = imageEl.getBoundingClientRect();
      this.imageInView = rect.top < window.innerHeight && rect.bottom > 0;
    }
//chevron buttons glow

    // Get the right content element
    const contentEl = document.querySelector('.move-right > div');
    if (contentEl) {
      const rect = contentEl.getBoundingClientRect();
      this.contentInView = rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Features grid
    if (this.featureGrid) {
      const rect = this.featureGrid.nativeElement.getBoundingClientRect();
      this.featuresInView = rect.top < window.innerHeight && rect.bottom > 0;
    }
  }

  // what we offer

  @ViewChildren('offerCard') offerCards!: QueryList<ElementRef>;
  offerCardVisible: boolean[] = [];
  whatWeOffer = [
    {
      img: '/assets/home/whatWeOffer/softwareServices.png',
      title: 'Software servies',
      desc: 'Custom software solutions designed to meet your unique business needs.',
    },
    {
      img: '/assets/home/whatWeOffer/itConsult.png',
      title: 'IT Consulting',
      desc: 'Expert guidance and strategic solutions to overcome challenges and drive your business.',
    },
    {
      img: '/assets/home/whatWeOffer/staffing.png',
      title: 'Staffing Solutions',
      desc: "Connect with the right talent to drive your organization's growth and success.",
    },
  ];

  // Features
  imageInView = false;
  contentInView = false;
  featuresInView = false;
  @ViewChild('featureGrid') featureGrid!: ElementRef;

  features = [
    {
      img: '/assets/home/about/integrity.png',
      title: 'Integrity',
      desc: 'Upholding honesty in all dealings',
    },
    {
      img: '/assets/home/about/teamWork.png',
      title: 'Team Work',
      desc: 'Collaborating to achieve shared success',
    },
    {
      img: '/assets/home/about/diversity.png',
      title: 'Commitment',
      desc: 'Dedicated to exceeding client expectations',
    },
    {
      img: '/assets/home/about/problemSolving.png',
      title: 'Diversity',
      desc: 'Embracing differences to drive innovation',
    },
  ];

  collaborations = [
    {
      img: '/assets/home/collaborate/expert.png',
      alt: 'Expert Team',
      title: 'Assemble Your Expert Team',
      desc: 'Reach out to us, and we’ll assign professionals perfectly suited to your project’s needs.',
    },
    {
      img: '/assets/home/collaborate/objectives.png',
      alt: 'Objectives',
      title: 'Define Your Objectives Clearly',
      desc: 'Engage in a strategic consultation to uncover your goals, challenges, and priorities.',
    },
    {
      img: '/assets/home/collaborate/strategy.png',
      alt: 'Strategy',
      title: 'Develop a Custom Strategy',
      desc: 'Receive a personalized, flexible plan tailored to solve your unique business challenges.',
    },
    {
      img: '/assets/home/collaborate/execute.png',
      alt: 'Execute',
      title: 'Execute with Confidence',
      desc: 'Our expert team and 24/7 support ensure seamless delivery and ongoing success.',
    },
    {
      img: '/assets/home/collaborate/expectations.png',
      alt: 'Expectations',
      title: 'Set Clear Expectations',
      desc: 'Align on requirements, limitations, and success criteria to ensure shared understanding.',
    },
    {
      img: '/assets/home/collaborate/objectives.png',
      alt: 'Objectives',
      title: 'Define Your Objectives Clearly',
      desc: 'Engage in a strategic consultation to uncover your goals, challenges, and priorities.',
    },
  ];

  // Industries
  industries = [
    {
      img: 'assets/home/whatWeOffer/itTele.png',
      alt: 'IT & TeleCommunications',
      title: 'IT & TeleCommunications',
    },
    {
      img: 'assets/home/whatWeOffer/healthCare.png',
      alt: 'Healthcare & Life Sciences',
       title: 'Healthcare & Life Sciences',
    },
    {
      img: 'assets/home/whatWeOffer/education.png',
      alt: 'Education',
      title: 'Education',
    },
    {
      img: 'assets/home/whatWeOffer/government.png',
      alt: 'Government',
       title: 'Government',
    },
  ];

  stats = [
    {
      img: '/assets/home/stats/clients.png',
      number: '4,386+',
      label: 'Satisfied Clients',
    },
    {
      img: '/assets/home/stats/projects.png',
      number: '400+',
      label: 'Finished projects',
    },
    {
      img: '/assets/home/stats/experts.png',
      number: '250+',
      label: 'Skilled experts',
    },
    {
      img: '/assets/home/stats/posts.png',
      number: '4,386+',
      label: 'Media posts',
    },
  ];

  ourInsightsSlides = [
    {
      image: 'assets/home/carousel/ourInsights-3.png',
      title: "Salesforce's Commitment to Data Security and Privacy Excellence",
      description: 'Read More >>',
    },
    {
      image: 'assets/home/carousel/ourInsights-2.png',
      title: 'Salesforce Marketing Cloud Empowers Marketing of Businesses',
      description: 'Read More >>',
    },
    {
      image: 'assets/home/carousel/ourInsights-1.png',
      title: 'Salesforce Health Cloud transform Payer sector in Healthcare',
      description: 'Read More >>',
    }

  ];

  testimonials = [
    {
      img: '/assets/home/testimonials/testimony1.jpg',
      name: 'Maria Sans',
      role: 'Co-founder - Zent Technologies',
      rating: 4,
      text: 'Sprintpark has delivered excellent services to deliver our AI products. They have given us innovative solutions. Happy client :)',
    },
    {
      img: '/assets/home/testimonials/testimony2.jpg',
      name: 'Maria Sans',
      role: 'Co-founder - Zent Technologies',
      rating: 4,
      text: 'Sprintpark has delivered excellent services to deliver our AI products. They have given us innovative solutions. Happy client :)',
    },
  ];

  currentInsightIndex = 1; // Start with the middle card (or 0 for first)


  isMobile = false;

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }
   
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  moveInsight(step: number) {
    const newIndex = this.currentInsightIndex + step;
    if (newIndex >= 0 && newIndex < this.ourInsightsSlides.length) {
      this.currentInsightIndex = newIndex;
    }
  }
}

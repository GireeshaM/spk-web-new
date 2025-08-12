import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, ViewChildren, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('slideUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(60px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('700ms cubic-bezier(0.23, 1, 0.32, 1)')),
      transition('visible => hidden', animate('0ms'))
    ])
  ]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('featureGrid') featureGrid!: ElementRef;
  whatWeOffer = [
    {
      img: '/assets/homepage/home 3rd section/software_3950815 1.png',
      title: 'Software servies',
      desc: 'Custom software solutions designed to meet your unique business needs.'
    },
    {
      img: '/assets/homepage/home 3rd section/svg_11516534 1.png',
      title: 'IT Consulting',
      desc: 'Expert guidance and strategic solutions to overcome challenges and drive your business.'
    },
    {
      img: '/assets/homepage/home 3rd section/talent-search_2272580 (1) 1.png',
      title: 'Staffing Solutions',
      desc: "Connect with the right talent to drive your organization's growth and success."
    }
  ];

  industries = [
    { img: '/assets/homepage/home 4th section/it expertise zoom.png', alt: 'IT & TeleCommunications' },
    { img: '/assets/homepage/home 4th section/Group 75.png', alt: 'Healthcare & Life Sciences' },
    { img: '/assets/homepage/home 4th section/education expertise.png', alt: 'Education' },
    { img: '/assets/homepage/home 4th section/government expertise.png', alt: 'Government' }
  ];
  collaborations = [
    {
      img: '/assets/homepage/home 5th section/expertise_18207927 1.png',
      alt: 'Expert Team',
      title: 'Assemble Your Expert Team',
      desc: 'Reach out to us, and we’ll assign professionals perfectly suited to your project’s needs.'
    },
    {
      img: '/assets/homepage/home 5th section/document_1054714 1 (1).png',
      alt: 'Objectives',
      title: 'Define Your Objectives Clearly',
      desc: 'Engage in a strategic consultation to uncover your goals, challenges, and priorities.'
    },
    {
      img: '/assets/homepage/home 5th section/creativity_6919253 1.png',
      alt: 'Strategy',
      title: 'Develop a Custom Strategy',
      desc: 'Receive a personalized, flexible plan tailored to solve your unique business challenges.'
    },
    {
      img: '/assets/homepage/home 5th section/client_18018986.png',
      alt: 'Execute',
      title: 'Execute with Confidence',
      desc: 'Our expert team and 24/7 support ensure seamless delivery and ongoing success.'
    },
    {
      img: '/assets/homepage/home 5th section/positive_14122126 1.png',
      alt: 'Expectations',
      title: 'Set Clear Expectations',
      desc: 'Align on requirements, limitations, and success criteria to ensure shared understanding.'
    },
    {
      img: '/assets/homepage/home 5th section/document_1054714 1 (1).png',
      alt: 'Objectives',
      title: 'Define Your Objectives Clearly',
      desc: 'Engage in a strategic consultation to uncover your goals, challenges, and priorities.'
    }
  ];
  stats = [
    {
      img: '/assets/homepage/home 6th section/team_7683985 1.png',
      number: '4,386+',
      label: 'Satisfied Clients'
    },
    {
      img: '/assets/homepage/home 6th section/g1227.png',
      number: '400+',
      label: 'Finished projects'
    },
    {
      img: '/assets/homepage/home 6th section/worker_2622194 1.png',
      number: '250+',
      label: 'Skilled experts'
    },
    {
      img: '/assets/homepage/home 6th section/social-media_10404224 1.png',
      number: '4,386+',
      label: 'Media posts'
    }
  ];
  

  testimonials = [
    {
      img: '/assets/homepage/home 8th section/5aab5459786b226d5d70e39a1dfa0e817fee1e4d.jpg',
      name: 'Maria Sans',
      role: 'Co-founder - Zent Technologies',
      rating: 4,
      text: 'Sprintpark has delivered excellent services to deliver our AI products. They have given us innovative solutions. Happy client :)'
    },
    {
      img: '/assets/homepage/home 8th section/25d1a77020008b9e3f08babd1f67f01cdb8f89d6.jpg',
      name: 'Maria Sans',
      role: 'Co-founder - Zent Technologies',
      rating: 4,
      text: 'Sprintpark has delivered excellent services to deliver our AI products. They have given us innovative solutions. Happy client :)'
    }
  ];

  @ViewChildren('offerCard') offerCards!: QueryList<ElementRef>;
  offerCardVisible: boolean[] = [];

  imageInView = false;
  contentInView = false;
  featuresInView = false;

  features = [
    {
      img: '/assets/homepage/home 2nd section/best-employee_8057738 1.png',
      title: 'Integrity',
      desc: 'Upholding honesty in all dealings'
    },
    {
      img: '/assets/homepage/home 2nd section/cooperation_8124710 1.png',
      title: 'Team Work',
      desc: 'Collaborating to achieve shared success'
    },
    {
      img: '/assets/homepage/home 2nd section/problem-solving_16781642 2.png',
      title: 'Commitment',
      desc: 'Dedicated to exceeding client expectations'
    },
    {
      img: '/assets/homepage/home 2nd section/diversity_4776029 1.png',
      title: 'Diversity',
      desc: 'Embracing differences to drive innovation'
    }
  ];

  ngOnInit() {
    this.offerCardVisible = this.whatWeOffer.map(() => false);
  }

  ngAfterViewInit() {
    this.checkInView();
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.offerCards.forEach((card, i) => {
      const rect = card.nativeElement.getBoundingClientRect();
      this.offerCardVisible[i] = rect.top < window.innerHeight && rect.bottom > 0;
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
}


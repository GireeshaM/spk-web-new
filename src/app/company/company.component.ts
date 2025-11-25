import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-company',
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
    animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CompanyComponent {
  
  @ViewChild('mainCard') mainCard!: ElementRef;
  @ViewChild('animLayer') animLayer!: ElementRef;

  testimonials = [
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
      role: 'Program Manager, Google Cloud',
      rating: 4,
      text: '“Their process is smooth, transparent, and very easy to work with.”',
    },
    {
      img: 'assets/home/testimonials/sofia_testinomial.png',
      name: 'Sophia Johnson',
      role: 'Customer Success Manager, Salesforce',
      rating: 4,
      text: '“We value SprintPark for consistently providing skilled and reliable professionals.”',
    },
    {
      img: 'assets/home/testimonials/karen_testinomial.png',
      name: 'Karen.S',
      role: 'Enterprise Account Director, Microsoft Azure',
      rating: 4,
      text: '“The team is supportive, attentive, and always quick to respond.”',
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
      role: 'Partner Solutions Lead, AWS India',
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

ngOnInit() {
  this.selected = this.testimonials[0];
}

  selected: any = null;

  // Carousel settings
  carouselIndex = 0;
  visibleCount = 3;
  cardHeight = 150;

  scrollUp() {
    if (this.carouselIndex > 0) this.carouselIndex--;
  }

  scrollDown() {
    if (this.carouselIndex < this.testimonials.length - this.visibleCount) {
      this.carouselIndex++;
    }
  }

  // Smooth animation from side → main card
  animateToMain(item: any, cardEl: HTMLElement) {
    const animLayerEl = this.animLayer.nativeElement;
    const mainCardEl = this.mainCard.nativeElement;

    const clone = cardEl.cloneNode(true) as HTMLElement;
    clone.style.position = 'absolute';
    clone.style.margin = '0';
    clone.style.transition = 'all 0.45s ease';

    const cardRect = cardEl.getBoundingClientRect();
    const mainRect = mainCardEl.getBoundingClientRect();

    clone.style.top = cardRect.top + 'px';
    clone.style.left = cardRect.left + 'px';
    clone.style.width = cardRect.width + 'px';
    clone.style.height = cardRect.height + 'px';

    animLayerEl.appendChild(clone);

    requestAnimationFrame(() => {
      clone.style.top = mainRect.top + 'px';
      clone.style.left = mainRect.left + 'px';
      clone.style.width = mainRect.width + 'px';
      clone.style.height = mainRect.height + 'px';
    });

    setTimeout(() => {
      this.selected = item;
      animLayerEl.removeChild(clone);
    }, 450);
  }
}
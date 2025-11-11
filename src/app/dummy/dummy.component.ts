import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  PLATFORM_ID,
  inject,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.scss',
  animations: [
    trigger('slideUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(60px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('700ms cubic-bezier(0.23, 1, 0.32, 1)')),
    ]),
  ],
})
export class DummyComponent implements AfterViewInit {
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

  currentIndex = 0;
  cardsPerView = 1;

  ngAfterViewInit() {
    this.cardsPerView = this.getCardsPerView();
  }

  @HostListener('window:resize')
  onResize() {
    const newCount = this.getCardsPerView();
    if (newCount !== this.cardsPerView) {
      this.cardsPerView = newCount;
      if (this.currentIndex > this.cards.length - this.cardsPerView) {
        this.currentIndex = Math.max(0, this.cards.length - this.cardsPerView);
      }
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
}

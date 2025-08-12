import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
btn1 = { label: 'Get started with AI', style: 'btn-warning' };
btn2 = { label: "Let's talk", style: 'btn-outline-light' };
slides = [
  {
    image: 'assets/Home/carousel-1.png',
    title: 'Next-Gen Software',
    subtitle: 'Smarter software, better solutions.',
    btn1: this.btn1,
    btn2: this.btn2
  },
  {
    image: 'assets/Home/carousel-2.png',
    title: 'Talent Solution',
    subtitle: 'Right people, Right fit.',
    btn1: this.btn1,
    btn2: this.btn2
  },
  {
    image: 'assets/Home/carousel-3.png',
    title: 'Tech Evolution Partners',
    subtitle: 'Smart Solutions, Clear Direction.',
    btn1: this.btn1,
    btn2: this.btn2
  },
  {
    image: 'assets/Home/carousel-4.png',
    title: 'Smart Product Rollouts',
    subtitle: 'From Code to Clients.',
    btn1: this.btn1,
    btn2: this.btn2
  },
  {
    image: 'assets/Home/carousel-5.png',
    title: 'From Plan to Launch',
    subtitle: 'Smart.Agile.Delivered',
    btn1: this.btn1,
    btn2: this.btn2
  },
  {
    image: 'assets/Home/carousel-6.png',
    title: 'Future in Focus',
    subtitle: "Get Ready for what's next in innovation  .",
    btn1: this.btn1,
    btn2: this.btn2
  }
];
  ourInsightsSlides = [
    {
      image: 'assets/Home/ourInsights-3.png',
      title: "Salesforce's Commitment to Data Security and Privacy Excellence",
      description: 'Read More >>'
    },
    {
      image: 'assets/Home/ourInsights-2.png',
      title: 'Salesforce Marketing Cloud Empowers Marketing of Businesses',
      description: 'Read More >>'
    },
    {
      image: 'assets/Home/ourInsights-1.png',
      title: 'Salesforce Health Cloud transform Payer sector in Healthcare',
      description: 'Read More >>'
    }
  ];
  responsiveOptions = [
  { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
  { breakpoint: '768px', numVisible: 2, numScroll: 1 },
  { breakpoint: '560px', numVisible: 1, numScroll: 1 }
];

  
}

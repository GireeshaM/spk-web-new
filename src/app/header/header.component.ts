import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('shutter', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        animate('300ms ease-in', style({ height: '0', opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  isIndustriesOpen = false;
  isProductsOpen = false;
  isScrolled = false;
  currentRoute = '';

  @ViewChild('mainCard') mainCard!: ElementRef;
  @ViewChild('animLayer') animLayer!: ElementRef;

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.isScrolled = window.scrollY > 100;
  }

  // Hover handlers for Industries
 public onIndustriesMouseEnter():void {
    this.isIndustriesOpen = true;
  }

 public onIndustriesMouseLeave():void {
    this.isIndustriesOpen = false;
  }

  // Hover handlers for Products
 public onProductsMouseEnter():void {
    this.isProductsOpen = true;
  }

 public onProductsMouseLeave():void {
    this.isProductsOpen = false;
  }

  public loginAs(role: string): void {
    switch (role) {
      case 'Admin':
      case 'Recruiter':
        window.open('https://talenthire.ceipal.com/signin', '_blank');
        break;
      case 'Employee':
        window.open('https://sprintpark.kredily.com/login/', '_blank');
        break;
    }
  }

  services = [
    {
      title: 'Smart Rack',
      description:
        'See Your Racks Smarter. Manage Them Faster',
      link: '/products',
    },
    {
      title: 'Interior Living',
      description:
        'Design Collaboration Made Effortless',
      link: '/products',
    },
    {
      title: 'LMS',
      description:
        'Smarter Learning. Seamless Growth',
      link: '/products',
    },
    {
      title: 'Code Detector',
      description:
        'Scan Smart. Fix Fast. Ship Secure',
      link: '/products',
    },
    {
      title: 'Project Management',
      description:
        'Project Management is a smart platform designed to help businesses and optimize every product.',
      link: '/project-management',
    },
    {
      title: 'Software Services',
      description:
        'Software Services is a smart platform designed to help businesses and optimize every product.',
      link: '/software-service',
    },
    {
      title: 'Staffing',
      description:
        'Staffing is a smart platform designed to help businesses and optimize every product.',
      link: '/staffing',
    },
    {
      title: 'IT Consulting',
      description:
        'IT Consulting is a smart platform designed to help businesses and optimize every product.',
      link: '/it-consulting',
    },
  ];

  industries = [
    {
      title: ' IT & Telecommunications',
      description:
        ' Modernize connectivity, infrastructure, and digital operations.',
      link: '/itAndTelecommunications',
    },
    {
      title: 'Government',
      description: 'Build secure, citizen-centric digital public services.',
      link: '/government',
    },
    {
      title: 'Health Care & Life Sciences',
      description:
        'Scalable health platforms built for precision and efficiency.',
      link: '/healthCareAndLifeSciences',
    },
    {
      title: 'Manufacturing',
      description:
        'Smarter production with automation and real-time visibility.',
      link: '/manufacturing',
    },
    {
      title: 'Education',
      description: 'Digital learning ecosystems for modern institutions.',
      link: '/education',
    },
    {
      title: 'Transportation & Logistics',
      description: 'End-to-end logistics intelligence and automation.',
      link: '/transportationAndLogistics',
    },
    {
      title: 'Banking',
      description: 'Secure, agile digital banking for a connected economy.',
      link: '/banking',
    },
  ];
}

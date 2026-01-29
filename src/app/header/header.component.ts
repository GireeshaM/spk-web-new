import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

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
  private readonly router = inject(Router);

  public isIndustriesOpen = false;
  public isProductsOpen = false;
  public isScrolled = false;
  public currentRoute = '';

  public activeService: any = null;

  public readonly defaultService = {
    title: 'Technology that Transforms',
    description:
      'Technology today is more than just a tool—it’s the core of smarter businesses. We build intelligent digital solutions that automate operations, enhance decision-making, and deliver real-time visibility across your entire ecosystem.',
    image:
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    link: '/software-service',
  };

  @ViewChild('mainCard') public mainCard!: ElementRef;
  @ViewChild('animLayer') public animLayer!: ElementRef;

  /* ---------------- Scroll ---------------- */

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.isScrolled = window.scrollY > 100;
  }

  /* ---------------- Hover handlers ---------------- */

  public onServiceHover(service: any): void {
    this.activeService = service;
  }

  public onServiceLeave(): void {
    this.activeService = null;
  }

  public onIndustriesMouseEnter(): void {
    this.isIndustriesOpen = true;
  }

  public onIndustriesMouseLeave(): void {
    this.isIndustriesOpen = false;
  }

  public onProductsMouseEnter(): void {
    this.isProductsOpen = true;
  }

  public onProductsMouseLeave(): void {
    this.isProductsOpen = false;
  }

  /* ---------------- Auth ---------------- */

  public loginAs(role: string): void {
    switch (role) {
      case 'Admin':
      case 'Recruiter':
        window.open('https://talenthire.ceipal.com/signin', '_blank');
        break;
      case 'Employee':
        window.open('https://sprintpark.kredily.com/login/', '_blank');
        break;
      default:
        break;
    }
  }

  /* ---------------- Navigation & Scroll ---------------- */

  public scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeOpenOffcanvas();
      return;
    }

    this.router.navigate(['/'], { fragment: id }).then(() => {
      setTimeout(() => {
        const elAfterNav = document.getElementById(id);
        if (elAfterNav) {
          elAfterNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        this.closeOpenOffcanvas();
      }, 60);
    });
  }

  private closeOpenOffcanvas(): void {
    const offcanvasEl = document.querySelector(
      '.offcanvas.show',
    ) as HTMLElement | null;

    if (!offcanvasEl) {
      return;
    }

    const win = window as any;
    if (win?.bootstrap?.Offcanvas) {
      const instance =
        win.bootstrap.Offcanvas.getInstance(offcanvasEl) ??
        new win.bootstrap.Offcanvas(offcanvasEl);
      instance.hide();
      return;
    }

    offcanvasEl.classList.remove('show');
    offcanvasEl.style.visibility = 'hidden';
    document.body.classList.remove('offcanvas-open');

    document
      .querySelectorAll('.offcanvas-backdrop')
      .forEach((b) => b.parentElement?.removeChild(b));
  }

  /* ---------------- Data ---------------- */

  public readonly services = [
    {
      title: 'Smart Rack',
      description: 'See Your Racks Smarter. Manage Them Faster',
      link: '/products/smart-rack',
      image: 'assets/products/product-2.jpg',
    },
    {
      title: 'Interior Living',
      description: 'Design Collaboration Made Effortless',
      link: '/products/interior-living',
      image: 'assets/products/product 1-a.jpg',
    },
    {
      title: 'LMS',
      description: 'Smarter Learning. Seamless Growth',
      link: '/products/lms',
      image: 'assets/products/product-3-a.jpg',
    },
    {
      title: 'Code Detector',
      description: 'Scan Smart. Fix Fast. Ship Secure',
      link: '/products/code-detector',
      image: 'assets/products/product-4.jpg',
    },
    {
      title: 'Project Management',
      description:
        'Project Management is a smart platform designed to help businesses and optimize every product.',
      link: '/services/project-management',
      image:
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    },
    {
      title: 'Software Services',
      description:
        'Software Services is a smart platform designed to help businesses and optimize every product.',
      link: '/services/software-service',
      image:
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    },
    {
      title: 'Staffing',
      description:
        'Staffing is a smart platform designed to help businesses and optimize every product.',
      link: '/services/staffing',
      image:
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    },
    {
      title: 'IT Consulting',
      description:
        'IT Consulting is a smart platform designed to help businesses and optimize every product.',
      link: '/services/it-consulting',
      image:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    },
  ];

  public readonly industries = [
    {
      title: 'IT & Telecommunications',
      description:
        'Modernize connectivity, infrastructure, and digital operations.',
      link: '/industries/it-and-telecommunications',
    },
    {
      title: 'Government',
      description: 'Build secure, citizen-centric digital public services.',
      link: '/industries/government',
    },
    {
      title: 'Health Care & Life Sciences',
      description:
        'Scalable health platforms built for precision and efficiency.',
      link: '/industries/healthcare-life-sciences',
    },
    {
      title: 'Manufacturing',
      description:
        'Smarter production with automation and real-time visibility.',
      link: '/industries/manufacturing',
    },
    {
      title: 'Education',
      description: 'Digital learning ecosystems for modern institutions.',
      link: '/industries/education',
    },
    {
      title: 'Transportation & Logistics',
      description: 'End-to-end logistics intelligence and automation.',
      link: '/industries/transportation-logistics',
    },
    {
      title: 'Banking',
      description: 'Secure, agile digital banking for a connected economy.',
      link: '/industries/banking',
    },
  ];
}

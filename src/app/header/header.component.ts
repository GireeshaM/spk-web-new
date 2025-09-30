import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import type { Modal as BootstrapModal } from 'bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  public isScrolled = false;

  @ViewChild('loginModal') loginModalRef!: ElementRef<HTMLDivElement>;
  private loginModalInstance!: BootstrapModal;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('bootstrap').then(({ Modal }) => {
        this.loginModalInstance = new Modal(this.loginModalRef.nativeElement);
      });
    }
  }

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.isScrolled = window.scrollY > 100;
  }

loginAs(role: string) {
  if (this.loginModalInstance) {
    this.loginModalInstance.hide();
  }

  switch (role) {
    case 'Admin':
    case 'Recruiter':
      // Open external URL in a new tab
      window.open('https://talenthire.ceipal.com/signin', '_blank');
      break;
    case 'Employee':
      // Navigate internally using Angular router
      this.router.navigate(['/employee-login']);
      break;
  }
}

  openLoginModal() {
    if (this.loginModalInstance) {
      this.loginModalInstance.show();
    }
  }
}

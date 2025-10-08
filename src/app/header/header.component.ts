import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isScrolled = false;

  router = inject(Router);

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.isScrolled = window.scrollY > 100;
  }

  public loginAs(role: string):void {
    switch (role) {
      case 'Admin':
      case 'Recruiter':
        window.location.href = 'https://talenthire.ceipal.com/signin';
        break;
      case 'Employee':
        this.router.navigate(['/employee-login']);
        break;
    }
  }
}

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

<<<<<<< HEAD
  public loginAs(role: string): void {
=======
  public loginAs(role: string) {
>>>>>>> 314733e0c190d638522eb980ba81138a9788ab02
    switch (role) {
      case 'Admin':
      case 'Recruiter':
        window.open('https://talenthire.ceipal.com/signin', '_blank');
        break;
      case 'Employee':
<<<<<<< HEAD
        window.location.href = 'https://app.kredily.com/login/';
        // this.router.navigate(['/employee-login']);
=======
        window.open('/employee-login', '_blank');
>>>>>>> 314733e0c190d638522eb980ba81138a9788ab02
        break;
    }
  }
}

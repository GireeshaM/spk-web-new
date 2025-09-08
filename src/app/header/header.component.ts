import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isScrolled = false;
  public modalService: any;

  public onAboutClick() {
    const section = document.getElementById('about-us');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  @HostListener('window:scroll', [])
 public  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }
}

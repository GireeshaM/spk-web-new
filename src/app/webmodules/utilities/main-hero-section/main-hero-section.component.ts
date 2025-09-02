import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-main-hero-section',
  imports: [CommonModule],
  templateUrl: './main-hero-section.component.html',
  styleUrl: './main-hero-section.component.scss',
})
export class MainHeroSectionComponent {
  @Input() whatHeader!: string;
  @Input() whatDescription!: string;
  @Input() heroImage!: string;
  @Input() alignRight: boolean = true;
  @Input() smallImage!: string;
  public isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }
}

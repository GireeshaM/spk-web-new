import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, Input } from '@angular/core';
import { PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main-hero-section',
  imports: [CommonModule],
  templateUrl: './main-hero-section.component.html',
  styleUrl: './main-hero-section.component.scss',
})
export class MainHeroSectionComponent implements OnInit {
  @Input() whatHeader!: string;
  @Input() whatDescription!: string;
  @Input() heroImage!: string;
  @Input() alignRight = true;
  @Input() smallImage!: string;

  public isMobile = false;

  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  public ngOnInit(): void {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  @HostListener('window:resize', [])
  public onResize(): void {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }
  public checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }
}

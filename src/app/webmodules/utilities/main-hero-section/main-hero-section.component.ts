import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser} from '@angular/common';
 
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
  private isBrowser: boolean;
 
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
 
  ngOnInit() {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }
 
  @HostListener('window:resize', [])
  onResize() {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }
 
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }
}
 
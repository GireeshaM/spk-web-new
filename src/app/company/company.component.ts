import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements AfterViewInit {
  @ViewChild('carouselInner') carouselInner!: ElementRef;
  @ViewChild('carouselNext', { static: true }) carouselNext!: ElementRef;
  @ViewChild('carouselPrev', { static: true }) carouselPrev!: ElementRef;

  private scrollPosition = 0;
  private cardWidth = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const carouselInnerEl = this.carouselInner.nativeElement as HTMLElement;
    this.cardWidth = carouselInnerEl.querySelector('.carousel-item')?.clientWidth || 0;
    const carouselWidth = carouselInnerEl.scrollWidth;

    console.log('Carousel Width:', carouselWidth);
    console.log('Card Width:', this.cardWidth);

    // Next button
    this.renderer.listen(this.carouselNext.nativeElement, 'click', () => {
      if (this.scrollPosition < carouselWidth - this.cardWidth) {
        this.scrollPosition += this.cardWidth;
        carouselInnerEl.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
      }
    });

    // Prev button
    this.renderer.listen(this.carouselPrev.nativeElement, 'click', () => {
      if (this.scrollPosition > 0) {
        this.scrollPosition -= this.cardWidth;
        carouselInnerEl.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
      }
    });
  }
}

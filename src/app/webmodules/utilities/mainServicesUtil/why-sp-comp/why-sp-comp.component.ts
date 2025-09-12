import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-why-sp-comp',
  imports: [CommonModule],
  templateUrl: './why-sp-comp.component.html',
  styleUrl: './why-sp-comp.component.scss'
})
export class WhySpCompComponent {
  @Input() mainHeading!: string;
  @Input() content!: string; 
  @Input() cards: { title: string; desc: string }[] = []; 
  @Input() image!: { 
    left: { src: string; alt: string };
  };
}

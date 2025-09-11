import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
interface SoftwareCard {
  title: string;
  image: string;
}

@Component({
  selector: 'app-what-we-do-comp',
  imports: [CommonModule],
  templateUrl: './what-we-do-comp.component.html',
  styleUrl: './what-we-do-comp.component.scss',
})
export class WhatWeDoCompComponent {
  @Input() softwareCards!: SoftwareCard[];
  @Input() whatWeDoHeading!: string;
  @Input() whatWeDoDescription!: string;
}

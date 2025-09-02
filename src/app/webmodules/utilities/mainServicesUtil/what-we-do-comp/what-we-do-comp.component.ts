import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-what-we-do-comp',
  imports: [CommonModule],
  templateUrl: './what-we-do-comp.component.html',
  styleUrl: './what-we-do-comp.component.scss',
})
export class WhatWeDoCompComponent {
  @Input() softwareCards!: any[];
  @Input() whatWeDoHeading!: string;
  @Input() whatWeDoDescription!: string;
}

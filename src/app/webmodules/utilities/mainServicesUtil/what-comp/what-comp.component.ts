import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-what-comp',
  imports: [CommonModule],
  templateUrl: './what-comp.component.html',
  styleUrl: './what-comp.component.scss',
})
export class WhatCompComponent {
  @Input() whyMainHeading!: string;
  @Input() whySubHeading!: string;
  @Input() whyContent!: string;
  @Input() whyCards: { title: string; desc: string }[] = [];
  @Input() images!: {
    left: { src: string; alt: string };
    right: { src: string; alt: string; extraClass?: string }[];
  };
}

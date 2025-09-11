import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
interface WhyListItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-unlock-comp',
  imports: [CommonModule],
  templateUrl: './unlock-comp.component.html',
  styleUrl: './unlock-comp.component.scss',
})
export class UnlockCompComponent {
  @Input() whyList!: WhyListItem[];

  @Input() whyheader!: string;

  @Input() images!: string[];
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
interface Point {
  title: string;
  description: string;
}

interface WhyListItem {
  title: string;
  description: string;
}

interface Step {
  title: string;
  description: string;
  icon?: string;
}
@Component({
  selector: 'app-industry-sub-util',
  imports: [CommonModule],
  templateUrl: './industry-sub-util.component.html',
  styleUrl: './industry-sub-util.component.scss',
})
export class IndustrySubUtilComponent {
 // From IndustrySubUtilComponent
  @Input() heroImage?: string;
  @Input() heroHeading?: string;
  @Input() subHeading?: string;
  @Input() introText?: string;
  @Input() points: Point[] = [];

  // From SubCardsComponent
  @Input() whyheader!: string;
  @Input() smallHeading!: string;
  @Input() whyList!: WhyListItem[];

  // From MapSectionComponent
  @Input() text?: string;
  @Input() steps: Step[] = [];
}
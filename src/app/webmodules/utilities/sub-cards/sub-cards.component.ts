import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
interface WhyListItem {
  title: string;
  description: string;
}
@Component({
  selector: 'app-sub-cards',
  imports: [CommonModule],
  templateUrl: './sub-cards.component.html',
  styleUrl: './sub-cards.component.scss'
})
export class SubCardsComponent {
  @Input() whyList!: WhyListItem[];
    @Input() smallHeading!: string;
  @Input() whyheader!: string;
}

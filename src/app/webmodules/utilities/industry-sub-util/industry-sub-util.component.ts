import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-industry-sub-util',
  imports: [CommonModule],
  templateUrl: './industry-sub-util.component.html',
  styleUrl: './industry-sub-util.component.scss',
})
export class IndustrySubUtilComponent {
  @Input() heroImage?: string;
  @Input() heroHeading?: string;
  @Input() subHeading?: string;
  @Input() introText?: string;
  @Input() points: { title: string; description: string }[] = [];
}
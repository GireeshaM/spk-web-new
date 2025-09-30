import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map-section',
  imports: [CommonModule],
  templateUrl: './map-section.component.html',
  styleUrl: './map-section.component.scss'
})
export class MapSectionComponent {
  @Input() heroHeading?: string;
  @Input() subHeading?: string;
  @Input() text?: string;
  @Input() steps: { title: string; description: string; icon?: string }[] = [];
}
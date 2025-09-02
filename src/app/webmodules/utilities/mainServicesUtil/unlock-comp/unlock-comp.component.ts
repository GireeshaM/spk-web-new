import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unlock-comp',
  imports: [],
  templateUrl: './unlock-comp.component.html',
  styleUrl: './unlock-comp.component.scss',
})
export class UnlockCompComponent {
  @Input() whyList!: any[];

  @Input() whyheader!: string;

  @Input() images!: string[];
}

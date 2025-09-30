import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-industry-util',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './industry-util.component.html',
  styleUrl: './industry-util.component.scss',
})
export class IndustryUtilComponent {
  @Input() img!: string;
  @Input() itHeader!: string;
  @Input() itHeading!:string;
  @Input() itContent!: string;
  @Input() itSubHeading!: string;
  @Input() cards: {
    title: string;
    description: string;
    link: string;
    img?: string;
  }[] = [];
  @Input() isTwoPerRow = false;
  @Input() headerBgImg!: string;
  @Input() industryImg!: string;
  public getCardClass(index: number): string {
    const classes = [
      'background-1',
      'background-2',
      'background-3',
      'background-4',
      'background-5',
      'background-6',
    ];
    return classes[index % classes.length];
  }
}

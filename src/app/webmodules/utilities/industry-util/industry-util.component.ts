import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-industry-util',
  imports: [CommonModule],
  templateUrl: './industry-util.component.html',
  styleUrl: './industry-util.component.scss',
})
export class IndustryUtilComponent {
@Input() img!: string;
  @Input() itHeader!: string;
  @Input() itContent!: string;
  @Input() itSubHeading!:string;
  // @Input() cards: { title: string; description: string; link: string;img?: string; }[] = [];
  @Input() isTwoPerRow: boolean = false;
  @Input() headerBgImg!: string;
  @Input() industryImg!: string;
 
   cards=[
  {
    img:'assets/Industries/DataPrivacy.png',
    title:'Data Privacy',
    description:'Protect your data using advanced risk assessments, encryption, and compliance tools to prevent breaches, leaks, and unauthorized access.',
    link:'/#'
  },
  {
    img:'assets/Industries/Automation.png',
    title:'Automation',
    description:'Automate personalized communications across email, SMS, and social media to boost efficiency, engagement, and timely customer interactions.',
    link:'/#'
  },
  
  
  
 ]
  getCardClass(index: number): string {
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

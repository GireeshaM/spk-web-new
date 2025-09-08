import { Component } from '@angular/core';
import { UnlockCompComponent } from '../../utilities/mainServicesUtil/unlock-comp/unlock-comp.component';
import { WhatCompComponent } from '../../utilities/mainServicesUtil/what-comp/what-comp.component';
import { WhatWeDoCompComponent } from '../../utilities/mainServicesUtil/what-we-do-comp/what-we-do-comp.component';
import { MainHeroSectionComponent } from '../../utilities/main-hero-section/main-hero-section.component';

@Component({
  selector: 'app-it-common',
  imports: [
    UnlockCompComponent,
    WhatCompComponent,
    WhatWeDoCompComponent,
    MainHeroSectionComponent,
  ],
  templateUrl: './it-common.component.html',
  styleUrl: './it-common.component.scss',
})
export class ItCommonComponent {
  // Section 1
  public whatMainHeader = 'IT Consulting';
  public whatDescription =
    'Leverage the knowledge of seasoned IT professionals who guide you from strategy to execution solution design, implementation, and issue resolution all handled by specialists.';
  public heroImage = 'assets/services/it-consulting-page/it-consulting-hero.jpg';
  public smallImage = 'assets/services/it-consulting-page/it-consulting-hero.jpg';

  // Section 2
  public whyHeader = 'Unlocking Growth Through IT Expertise';
  public whyList!: any[];
  public images = [
    'assets/services/it-consulting-page/icon-1.png',
    'assets/services/it-consulting-page/icon-2.png',
    'assets/services/it-consulting-page/icon-3.png',
    'assets/services/it-consulting-page/icon-4.png',
  ];
  public  ngOnInit() {
    this.whyList = [
      'Access Professionals',
      'Get access to the team of experts who can help you in all the way to solution generation, implementation and troubleshoot. ',
      'Reduce Risk',
      'We provide a maximum security for your solutions by continuously monitoring to prevent attacks before they may happen.',
      'Reduce Cost',
      'Optimize your budget by maintaining high system performance without the need for full-time staff. Additionally, reduce the risk of expensive costs in the future.',
      'Objective Analysis',
      'External IT consultants can evaluate your processes to provide a point of view on how your solution works.',
    ];
  }
  // Section 3
  public whyMainHeading = 'What Sets Us Apart';
  public whySubHeading = 'Visionary';
  public whyContent =
    'We blend deep technical expertise with a customer-first mindset. Our solutions are built to scale, adapt, and deliver lasting value.';
  public whyCards = [
    {
      title: 'Expertise & Insight',
      desc: 'With over 15 years of industry experience, our professionals bring deep knowledge and proven strategies to deliver smart, results-driven solutions tailored to your business.',
    },
    {
      title: 'Reliable & Transparent Partnership',
      desc: 'We believe in long-term relationships built on trust, accountability, and consistent delivery. Our commitment to integrity is reflected in everything we do.',
    },
    {
      title: 'Flexible Engagement Models',
      desc: 'We offer adaptable plans designed to fit your unique goals, timelines, and budget—whether you need end-to-end support or specialized consulting.',
    },
    {
      title: 'Client-Centric Focus',
      desc: 'Your success is our priority. We put your needs first, delivering intuitive solutions and seamless experiences that truly serve your users and stakeholders.',
    },
  ];
  public teamImages = {
    left: {
      src: 'assets/services/it-consulting-page/team-1.png',
      alt: 'Team 1',
    },
    right: [
      {
        src: 'assets/services/it-consulting-page/team-2.png',
        alt: 'Team 2',
        extraClass: 'mb-3',
      },
      {
        src: 'assets/services/it-consulting-page/team-3.png',
        alt: 'Team 3',
      },
    ],
  };
  // Section 4
  public whatWeDoHeading = 'What we do';
  public whatWeDoDescription =
    'SprintPark offers wide range of IT Consulting services which include';
  public  softwareCards = [
    {
      title: 'IT Assessment',
      image: 'assets/services/it-consulting-page/it-assessment.jpg',
    },
    {
      title: 'IT Design Consulting',
      image: 'assets/services/it-consulting-page/it-design-figmac.png',
    },
    {
      title: 'IT Infrastructure Consulting',
      image: 'assets/services/it-consulting-page/it-infra.jpg',
    },
  ];
}

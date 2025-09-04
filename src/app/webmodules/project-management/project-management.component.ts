import { Component } from '@angular/core';
import { UnlockCompComponent } from '../utilities/mainServicesUtil/unlock-comp/unlock-comp.component';
import { WhatCompComponent } from '../utilities/mainServicesUtil/what-comp/what-comp.component';
import { WhatWeDoCompComponent } from '../utilities/mainServicesUtil/what-we-do-comp/what-we-do-comp.component';
import { MainHeroSectionComponent } from '../utilities/main-hero-section/main-hero-section.component';

@Component({
  selector: 'app-project-management',
  imports: [ UnlockCompComponent,
      WhatCompComponent,
      WhatWeDoCompComponent,
      MainHeroSectionComponent,],
  templateUrl: './project-management.component.html',
  styleUrl: './project-management.component.scss'
})
export class ProjectManagementComponent {
// Section 1
  public whatMainHeader = 'Project Management';
  public whatDescription =
    'SprintPark’s project management services ensure seamless execution from planning to delivery. We drive efficiency, collaboration, and timely outcomes aligned with your business objectives.';
  public heroImage = 'assets/services/software-services/itConsult.png';
  public smallImage = 'assets/services/software-services/itConsult.png';

  // Section 2
  public whyHeader = 'Ensuring Excellence in Project Delivery';
  public whyList!: any[];
  public images = [
    'assets/staffing/time.png',
    'assets/itImages/risk.png',
    'assets/itImages/reduce.png',
    'assets/itImages/analyze.png',
  ];
  ngOnInit() {
    this.whyList = [
      'Enhance Internal Communication',
      'Streamlined project management processes reduce complexity, improve team collaboration, and boost transparency across departments. ',
      'Costs',
      'Effective planning and execution ensure projects are delivered on schedule and within budget reducing waste and maximizing ROI.',
      'Enable Smarter Decision-Making',
      'Real-time insights into project progress provide clarity on resource allocation, timelines, and priorities—leading to more informed, strategic decisions.',
      'Discover Best Practices',
      'External IT consultants offer unbiased audits and recommendations to refine your solutions and align them with industry-leading standards.',
    ];
  }

  // Section 3
  public whyMainHeading = 'Our Commitment to Your Success';
  public whySubHeading = 'The SprintPark Approach Innovation, Collaboration, and Impact';
  public whyContent =
    'At SprintPark, we combine cutting-edge innovation with full project ownership and close collaboration to deliver software solutions that drive measurable business results and lasting success.';
  public whyCards = [
    {
      title: 'Innovation-Driven Mindset',
      desc: "We don't just build  we innovate. Our team consistently integrates the latest technologies to deliver forward-thinking software that gives you a competitive edge.",
    },
    {
      title: 'End-to-End Project Ownership',
      desc: 'From initial consultation to post-launch support, we manage the entire software lifecycle with accountability and precision.',
    },
    {
      title: ' Collaborative Culture',
      desc: ' We believe in open communication and working as an extension of your team — ensuring transparency, agility, and alignment every step of the way.',
    },
    {
      title: ' Results-Focused Delivery',
      desc: ' Every line of code we write serves a purpose. Our focus is on delivering measurable outcomes that align with your business objectives.',
    },
  ];
  teamImages = {
    left: {
      src: 'assets/services/software-services/section-3-1.png',
      alt: 'Team 1',
    },
    right: [
      {
        src: 'assets/services/software-services/section-3-2.png',
        alt: 'Team 2',
        extraClass: 'mb-3',
      },
      {
        src: 'assets/services/software-services/section-3-3.png',
        alt: 'Team 3',
      },
    ],
  };

  // Section 4
  public whatWeDoHeading = 'How We Deliver Value';
  public whatWeDoDescription =
    'SprintPark delivers tailored project management solutions that ensure efficient execution, expert support, and long-term success built around your unique business needs.  ';
  softwareCards = [
    {
      title: 'Project Implementation',
      image: 'assets/services/software-services/whatWeDo.png',
    },
    {
      title: 'Project Outsourcing ',
      image: 'assets/services/software-services/whatWeDo.png',
    },
    {
      title: 'Project Consulting',
      image: 'assets/services/software-services/whatWeDo.png',
    },
  ];
}



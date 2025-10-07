import { Component } from '@angular/core';
import { UnlockCompComponent } from '../utilities/mainServicesUtil/unlock-comp/unlock-comp.component';
import { WhatCompComponent } from '../utilities/mainServicesUtil/what-comp/what-comp.component';
import { WhatWeDoCompComponent } from '../utilities/mainServicesUtil/what-we-do-comp/what-we-do-comp.component';
import { MainHeroSectionComponent } from '../utilities/main-hero-section/main-hero-section.component';

@Component({
  selector: 'app-project-management',
  imports: [
    UnlockCompComponent,
    WhatCompComponent,
    WhatWeDoCompComponent,
    MainHeroSectionComponent,
  ],
  templateUrl: './project-management.component.html',
  styleUrl: './project-management.component.scss',
})
export class ProjectManagementComponent {
  // Section 1
  public whatMainHeader = 'Project Management';
  public whatDescription =
    'SprintPark’s project management services ensure seamless execution from planning to delivery. We drive efficiency, collaboration, and timely outcomes aligned with your business objectives.';
  public heroImage = 'assets/services/project-management-service/project-management-hero.png';
  public smallImage = 'assets/services/project-management-service/project-management-hero.png';
  // Section 2
  public whyHeader = 'Ensuring Excellence in Project Delivery';
  public images = [
    'assets/services/project-management-service/enhance-internal-communication.png',
    'assets/services/project-management-service/costs.png',
    'assets/services/project-management-service/enable-Smarter-Decision-Making.png',
    'assets/services/project-management-service/discover-best-practices.png',
  ];

 public whyList = [
    {
      title: 'Enhance Internal Communication',
      description:
        'Streamlined project management processes reduce complexity, improve team collaboration, and boost transparency across departments.',
    },
    {
      title: 'Costs',
      description:
        'Effective planning and execution ensure projects are delivered on schedule and within budget reducing waste and maximizing ROI.',
    },
    {
      title: 'Enable Smarter Decision-Making',
      description:
        'Real-time insights into project progress provide clarity on resource allocation, timelines, and priorities—leading to more informed, strategic decisions.',
    },
    {
      title: 'Discover Best Practices',
      description:
        'External IT consultants offer unbiased audits and recommendations to refine your solutions and align them with industry-leading standards.',
    },
  ];

  // Section 3
  public whyMainHeading = 'Our Commitment to Your Success';
  public whySubHeading =
    'The SprintPark Approach Innovation, Collaboration, and Impact';
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
  public teamImages = {
    left: {
      src: 'assets/services/project-management-service/team-1.png',
      alt: 'Team 1',
    },
    right: [
      {
        src: 'assets/services/project-management-service/team-2.jpeg',
        alt: 'Team 2',
        extraClass: 'mb-3',
      },
      {
        src: 'assets/services/project-management-service/team-3.jpeg',
        alt: 'Team 3',
      },
    ],
  };

  // Section 4
  public whatWeDoHeading = 'How We Deliver Value';
  public whatWeDoDescription =
    'SprintPark delivers tailored project management solutions that ensure efficient execution, expert support, and long-term success built around your unique business needs.  ';
  public softwareCards = [
    {
      title: 'Project Implementation',
      image: 'assets/services/project-management-service/project-implementation.jpg',
    },
    {
      title: 'Project Outsourcing ',
      image: 'assets/services/project-management-service/project-outsourcing.jpg',
    },
    {
      title: 'Project Consulting',
      image: 'assets/services/project-management-service/project-consulting.jpg',
    },
  ];
}
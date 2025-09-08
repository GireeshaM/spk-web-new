import { Component } from '@angular/core';
import { UnlockCompComponent } from '../utilities/mainServicesUtil/unlock-comp/unlock-comp.component';
import { WhatCompComponent } from '../utilities/mainServicesUtil/what-comp/what-comp.component';
import { WhatWeDoCompComponent } from '../utilities/mainServicesUtil/what-we-do-comp/what-we-do-comp.component';
import { MainHeroSectionComponent } from '../utilities/main-hero-section/main-hero-section.component';
 
 
@Component({
  selector: 'app-staffing',
  imports: [
    UnlockCompComponent,
    WhatCompComponent,
    WhatWeDoCompComponent,
    MainHeroSectionComponent,
  ],
  templateUrl: './staffing.component.html',
  styleUrl: './staffing.component.scss',
})
export class staffingComponent {
  // Section 1
  public whatMainHeader = 'Staffing Solutions ';
  public whatDescription =
    'SprintPark’s staffing solutions connect businesses with top-tier talent, ensuring the right skills for every project. We deliver flexible, reliable workforce support to meet evolving business needs';
  public heroImage = 'assets/services/software-services/itConsult.png';
  public smallImage = 'assets/services/software-services/itConsult.png';
 
  // Section 2
  public whyHeader = 'Unlocking Growth Through IT Expertise';
  public whyList!: any[];
  public images = [
    'assets/staffing/time.png',
    'assets/itImages/risk.png',
    'assets/itImages/reduce.png',
    'assets/itImages/analyze.png',
  ];
  public ngOnInit() {
    this.whyList = [
      'Boost Employee Retention',
      'We align the right candidate with the right job to reduce attrition and increase long-term engagement. ',
      'Minimize Training Costs',
      'Our staffing approach ensures you skip unnecessary training by onboarding candidates who are already equipped.',
      'Access Global Talent Pools',
      'We provide access to a wide talent ecosystem across borders, giving you a competitive edge.',
      'Accelerate Hiring Timelines',
      'We handle everything from sourcing to onboarding so you can focus on scaling your business.',
    ];
  }
 
  // Section 3
  public whyMainHeading = 'Our Talent Acquisition Process';
  public whySubHeading = 'Our Hiring Journey';
  public whyContent =
    'Our talent acquisition process ensures fairness and clarity at every stage From sourcing to on boarding .';
  public whyCards = [
    {
      title: 'Role Discovery',
      desc: ' We start by understanding the role, technical skills, and key attributes the client is looking for ensuring alignment with business goals.',
    },
    {
      title: 'Talent Sourcing',
      desc: 'We tap into both active and passive candidate pools using advanced tools, giving you access to talent that many others miss.',
    },
    {
      title: 'Screening & Fit',
      desc: 'Candidates are evaluated for skills, experience, and cultural fit to ensure they meet both technical and organizational needs.',
    },
    {
      title: 'Background Checks',
      desc: 'We conduct thorough verifications background, references, and credit checks to ensure reliability and compliance.',
    },
  ];
  public teamImages = {
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
  public whatWeDoHeading = 'Our Staffing Services';
  public whatWeDoDescription =
    'At SprintPark, we offer dynamic and scalable staffing solutions tailored to your business needs whether youre expanding locally or globally.';
public  softwareCards = [
    {
      title: 'Contract Staffing  ',
      image: 'assets/services/software-services/whatWeDo.png',
    },
    {
      title: 'Permanent Staffing ',
      image: 'assets/services/software-services/whatWeDo.png',
    },
    {
      title: 'Offshore Staffing',
      image: 'assets/services/software-services/whatWeDo.png',
    },
  ];
}
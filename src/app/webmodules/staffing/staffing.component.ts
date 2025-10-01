import { Component } from '@angular/core';
import { UnlockCompComponent } from '../utilities/mainServicesUtil/unlock-comp/unlock-comp.component';
import { WhatCompComponent } from '../utilities/mainServicesUtil/what-comp/what-comp.component';
import { WhatWeDoCompComponent } from '../utilities/mainServicesUtil/what-we-do-comp/what-we-do-comp.component';
import { MainHeroSectionComponent } from '../utilities/main-hero-section/main-hero-section.component';
import { WhySpCompComponent } from '../utilities/mainServicesUtil/why-sp-comp/why-sp-comp.component';

@Component({
  selector: 'app-staffing',
  imports: [
    UnlockCompComponent,
    WhatCompComponent,
    WhatWeDoCompComponent,
    MainHeroSectionComponent,
    WhySpCompComponent
  ],
  templateUrl: './staffing.component.html',
  styleUrl: './staffing.component.scss',
})
export class StaffingComponent {
  // Section 1
  public whatMainHeader = 'Staffing Solutions ';
  public whatDescription =
    'SprintPark’s staffing solutions connect businesses with top-tier talent, ensuring the right skills for every project. We deliver flexible, reliable workforce support to meet evolving business needs';
  public heroImage = 'assets/services/staffing-service/staffing-hero.png';
  public smallImage = 'assets/services/staffing-service/staffing-hero.png';

  // Section 2
  public whyHeader = 'Unlocking Growth Through IT Expertise';

  public images = [
    'assets/services/staffing-service/boost_employee.png',
    'assets/services/staffing-service/minimize-Training-Costs.png',
    'assets/services/staffing-service/access-Global-Talent.png',
    'assets/services/staffing-service/accelerate-Hiring-Timelines.png',
  ];

  public whyList = [
    {
      title: 'Boost Employee Retention',
      description: 'We align the right candidate with the right job to reduce attrition and increase long-term engagement.',
    },
    {
      title: 'Minimize Training Costs',
      description: 'Our staffing approach ensures you skip unnecessary training by onboarding candidates who are already equipped.',
    },
    {
      title: 'Access Global Talent Pools',
      description: 'We provide access to a wide talent ecosystem across borders, giving you a competitive edge.',
    },
    {
      title: 'Accelerate Hiring Timelines',
      description: 'We handle everything from sourcing to onboarding so you can focus on scaling your business.',
    },
  ];

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
      src: 'assets/services/staffing-service/staffing-team-1.png',
      alt: 'Team 1',
    },
    right: [
      {
        src: 'assets/services/staffing-service/staffing-team-2.jpeg',
        alt: 'Team 2',
        extraClass: 'mb-3',
      },
      {
        src: 'assets/services/staffing-service/staffing-team-3.png',
        alt: 'Team 3',
      },
    ],
  };

public mainHeading = 'Why SprintPark Stands Out';

public content =
  'At SprintPark, we’re more than a staffing partner — we’re your long-term growth enabler. Our strength lies in our strategic mindset, client-focused execution, and unwavering commitment to quality.';

public cards = [
  {
    title: 'Expertise You Can Rely On',
    desc: `We are with over 15 years of experience in talent acquisition and workforce solutions,
           our team brings deep industry knowledge and proven hiring strategies to every project.`,
  },
  {
    title: 'Client-First Philosophy',
    desc: `Your success is our priority. We listen, adapt, and deliver staffing solutions
           that not only meet but exceed your expectations every time.`,
  },
  {
    title: 'Tailored Engagement Models',
    desc: `We don’t believe in one-size-fits-all. From contract to permanent roles, we offer flexible staffing models
           built around your unique goals and business dynamics.`,
  },
  {
    title: 'Transparent & Trusted Partnerships',
    desc: `Integrity and trust are at the core of everything we do. Our pricing is transparent,
           and our processes are designed to drive measurable value and long-term partnerships.`,
  },
];

public image = {
  left: {
    src: 'assets/services/staffing-service/spk-stands-out.png',
    alt: 'Why SprintPark Image',
  },
};



  // Section 5
  public whatWeDoHeading = 'Our Staffing Services';
  public whatWeDoDescription =
    'At SprintPark, we offer dynamic and scalable staffing solutions tailored to your business needs whether youre expanding locally or globally.';
  public softwareCards = [
    {
      title: 'Contract Staffing  ',
      image: 'assets/services/staffing-service/contract-staffing.jpg',
    },
    {
      title: 'Permanent Staffing ',
      image: 'assets/services/staffing-service/permanent-staffing.jpg',
    },
    {
      title: 'Offshore Staffing',
      image: 'assets/services/staffing-service/offshore-staffing.jpg',
    },
  ];
}
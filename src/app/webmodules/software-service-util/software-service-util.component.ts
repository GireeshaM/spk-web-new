import { Component } from '@angular/core';
import { UnlockCompComponent } from '../utilities/mainServicesUtil/unlock-comp/unlock-comp.component';
import { WhatCompComponent } from '../utilities/mainServicesUtil/what-comp/what-comp.component';
import { WhatWeDoCompComponent } from '../utilities/mainServicesUtil/what-we-do-comp/what-we-do-comp.component';
import { MainHeroSectionComponent } from '../utilities/main-hero-section/main-hero-section.component';

@Component({
  selector: 'app-software-service-util',
  imports: [
    UnlockCompComponent,
    WhatCompComponent,
    WhatWeDoCompComponent,
    MainHeroSectionComponent,
  ],
  templateUrl: './software-service-util.component.html',
  styleUrl: './software-service-util.component.scss',
})
export class SoftwareServiceUtilComponent {
  // Section 1
  public whatMainHeader = 'Software Services ';
  public whatDescription =
    'SprintPark’s software services deliver customized, high-performance solutions that accelerate digital growth. From development to deployment, we ensure scalable, secure, and user-centric applications.';
  public heroImage =
    'assets/services/software-services/software-service-hero.png';
  public smallImage =
    'assets/services/software-services/software-service-hero.png';

  // Section 2
  public whyHeader =
    'Enhancing Organizational Performance with Software Solutions.';
  public images = [
    'assets/services/software-services/digital-transformation.png',
    'assets/services/software-services/tailor-your-needs.png',
    'assets/services/software-services/scalability-Flexibility.png',
    'assets/services/software-services/security-and-relability.png',
  ];
  public whyList = [
    {
      title: 'Digital Transformation',
      description:
        'Empower your business with custom-built software that automates operations, enhances customer experience, and drives innovation.',
    },
    {
      title: 'Tailored Your Needs',
      description:
        'Every business is unique — our software solutions are crafted specifically to fit your goals, workflows, and challenges.',
    },
    {
      title: 'Scalability & Flexibility',
      description:
        'We build future-ready systems that grow with your business, ensuring long-term success and adaptability.',
    },
    {
      title: 'Security & Reliability',
      description:
        'Your data is safe with us. We prioritize secure architecture, quality assurance, and 24/7 support.',
    },
  ];
  // Section 3
  public whyMainHeading = 'Why SprintPark is Your Ideal Software Partner  ';
  public whySubHeading =
    'Your Trusted Partner for Comprehensive Software Solutions';
  public whyContent =
    'SprintPark delivers tailored AI, data analytics, cybersecurity, and Salesforce services to boost your efficiency, security, and growth.';
  public whyCards = [
    {
      title: 'Automation',
      desc: ' We design and implement smart automation solutions that reduce manual effort, improve accuracy, and drive efficiency. From AI-powered workflows to intelligent chatbots, we help businesses scale with automation.',
    },
    {
      title: 'Big Data & Analytics Solutions',
      desc: 'Our data experts transform massive datasets into actionable insights. We build secure, scalable data pipelines and analytics dashboards to empower data-driven decision-making at every level of your organization.',
    },
    {
      title: 'Cybersecurity & Risk Management',
      desc: 'Protecting your digital assets is our top priority. We implement robust security frameworks, monitor threats in real time, and ensure regulatory compliance to safeguard your systems from evolving cyber threats.',
    },
    {
      title: 'Salesforce Consulting & Integration',
      desc: 'Maximize your Salesforce investment with our tailored CRM solutions. From implementation and customization to third-party integrations, we help streamline your sales, marketing, and customer service processes.',
    },
  ];
  public teamImages = {
    left: {
      src: 'assets/services/software-services/software-partner-1.png',
      alt: 'Team 1',
    },
    right: [
      {
        src: 'assets/services/software-services/software-partner-2.jpeg',
        alt: 'Team 2',
        extraClass: 'mb-3',
      },
      {
        src: 'assets/services/software-services/software-partner-3.jpeg',
        alt: 'Team 3',
      },
    ],
  };

  // Section 4
  public whatWeDoHeading = 'Driving Excellence in Software Development';
  public whatWeDoDescription =
    'SprintPark delivers innovative, tailored software solutions designed to meet your unique business needs and drive growth.';
  public softwareCards = [
    {
      title: 'Comprehensive Software Solutions ',
      image: 'assets/services/software-services/comprehensive-software.jpg',
    },
    {
      title: 'Innovative Technology Services ',
      image: 'assets/services/software-services/Innovative-service.jpg',
    },
    {
      title: 'Tailored Software Development',
      image: 'assets/services/software-services/tailored-software.jpg',
    },
  ];
}

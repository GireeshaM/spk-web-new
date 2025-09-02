import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-software-service-util',
  imports: [CommonModule],
  templateUrl: './software-service-util.component.html',
  styleUrl: './software-service-util.component.scss',
})
export class SoftwareServiceUtilComponent {
  heroTitle: string = 'Software Services';
  heroDesc: string =
    'SprintPark’s software services deliver customized, high-performance solutions that accelerate digital growth. From development to deployment, we ensure scalable, secure, and user-centric applications.';
  growthCards = [
    {
      icon: 'assets/services/software-services/Digital-transformation.png',
      title: 'Digital Transformation',
      description:
        'Empower your business with custom-built software that automates operations, enhances customer experience, and drives innovation.',
    },
    {
      icon: 'assets/services/software-services/tailor-your-needs.png',
      title: ' Tailored Your Needs',
      description:
        'Every business is unique — our software solutions are crafted specifically to fit your goals, workflows, and challenges.',
    },
    {
      icon: 'assets/services/software-services/Scalability-Flexibility.png',
      title: ' Scalability & Flexibility ',
      description:
        'We build future-ready systems that grow with your business, ensuring long-term success and adaptability.',
    },
    {
      icon: 'assets/services/software-services/section3.svg',
      title: 'Security & Reliability',
      description:
        'Your data is safe with us. We prioritize secure architecture, quality assurance, and 24/7 support.',
    },
  ];
  // Section 3

  whyCards = [
    {
      title: 'Automation',
      desc: 'We design and implement smart automation solutions that reduce manual effort, improve accuracy, and drive efficiency. From AI-powered workflows to intelligent chatbots, we help businesses scale with automation.',
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

  softwareCards = [
    {
      image: 'assets/services/software-services/comprehensive-software.png',
      title: 'Comprehensive Software Solutions',
    },
    {
      image: 'assets/services/software-services/Innovative-service.png',
      title: 'Innovative Technology Services',
    },
    {
      image: 'assets/services/software-services/tailored-software.png',
      title: 'Tailored Software Development',
    },
  ];
}

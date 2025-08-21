import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-software-service-util',
  imports: [CommonModule],
  templateUrl: './software-service-util.component.html',
  styleUrl: './software-service-util.component.scss'
})
export class SoftwareServiceUtilComponent {
  heroTitle: string = 'Software Services';
  heroDesc: string = 'SprintPark’s software services deliver customized, high-performance solutions that accelerate digital growth. From development to deployment, we ensure scalable, secure, and user-centric applications.';
  growthCards = [
  {
    icon: 'assets/services/software-services/Digital-transformation.png',
    title: 'Digital Transformation',
    description: 'Empower your business with custom-built software that automates operations, enhances customer experience, and drives innovation.'
  },
  {
    icon: 'assets/services/software-services/tailor-your-needs.png',
    title: ' Tailored Your Needs',
    description: 'Every business is unique — our software solutions are crafted specifically to fit your goals, workflows, and challenges.'
  },
  {
    icon: 'assets/services/software-services/Scalability-Flexibility.png',
    title: ' Scalability & Flexibility ',
    description: 'We build future-ready systems that grow with your business, ensuring long-term success and adaptability.'
  },
  {
    icon: 'assets/services/software-services/section3.svg',
    title: 'Security & Reliability',
    description: 'Your data is safe with us. We prioritize secure architecture, quality assurance, and 24/7 support.'
  }
];
// Section 3
  heading: string = 'Why SprintPark is Your Ideal Software Partner  '; 
  subHeading:string='Your Trusted Partner for Comprehensive Software Solutions';
  desc:string='SprintPark delivers tailored AI, data analytics, cybersecurity, and Salesforce  services to boost your efficiency, security, and growth.';
  card1Title:string='Automation';
  card1Desc:string='We design and implement smart automation solutions that reduce manual effort, improve accuracy, and drive efficiency. From AI-powered workflows to intelligent chatbots, we help businesses scale with automation.';
  card2Title:string='Big Data & Analytics Solutions';
  card2Desc:string='Our data experts transform massive datasets into actionable insights. We build secure, scalable data pipelines and analytics dashboards to empower data-driven decision-making at every level of your organization.';
  card3Title:string='Cybersecurity & Risk Management';
  card3Desc:string='Protecting your digital assets is our top priority. We implement robust security frameworks, monitor threats in real time, and ensure regulatory compliance to safeguard your systems from evolving cyber threats.';
  card4Title:string='Salesforce Consulting & Integration';
  card4Desc:string='Maximize your Salesforce investment with our tailored CRM solutions. From implementation and customization to third-party integrations, we help streamline your sales, marketing, and customer service processes.';
  softwareCards = [
  {
    image: 'assets/services/software-services/comprehensive-software.png',
    title: 'Comprehensive Software Solutions'
  },
  {
    image: 'assets/services/software-services/Innovative-service.png',
    title: 'Innovative Technology Services'
  },
  {
    image: 'assets/services/software-services/tailored-software.png',
    title: 'Tailored Software Development'
  }
];

}

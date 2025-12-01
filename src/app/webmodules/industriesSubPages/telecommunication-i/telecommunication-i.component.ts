import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustrySubUtilComponent } from '../../utilities/industry-sub-util/industry-sub-util.component';
import { CommonModule } from '@angular/common';

interface Section {
  heroImage: string;
  whyheader: string;
  smallHeading: string;
  whyList: Array<{ title: string; description: string }>;
  steps: Array<{ title: string; description: string; icon?: string }>;
  text?: string;
}
const commonSteps = [
  {
    title: 'Understand',
    icon: 'assets/Industries/understand.svg',
    description:
      'We learn about your business challenges, goals and ambitions, strategic drivers and culture.',
  },
  {
    title: 'Assess',
    icon: 'assets/Industries/access.svg',
    description:
      'We assess your current risk position relative to your needs and goals, and develop a roadmap for optimizing your cybersecurity.',
  },
  {
    title: 'Design',
    icon: 'assets/Industries/design.svg',
    description:
      'We design solutions, processes and strategies that allow you to achieve the desired state of security and effectiveness.',
  },
  {
    title: 'Implement',
    icon: 'assets/Industries/implement.svg',
    description:
      'We draw on our experience and expertise to implement the agreed technical solutions, governance, compliance frameworks and migration processes.',
  },
  {
    title: 'Manage and Optimize',
    icon: 'assets/Industries/manage-and-optimize.svg',
    description:
      'We operate to deliver tangible, value-added cyber security on a 24/7 basis. We use our methodology to evolve and optimize your solution over time, to maximize value.',
  },
];
const sectionsData: Record<string, Section> = {
  dataPrivacy: {
    heroImage:
      'assets/Industries/telecommunicationSubPages/data-privacy-hero.jpg',
    whyheader: 'Why Data Privacy is Telecom’s Biggest Challenge?',
    smallHeading: 'Customer trust begins with secure communication.',
    whyList: [
      {
        title: 'Telecom & Data Privacy',
        description:
          ' Telecoms handle huge personal data. Breaches impact millions. Encryption, real-time monitoring, and user awareness are vital for digital trust.',
      },
      {
        title: 'From Calls to Clouds',
        description:
          'Telecoms now manage payments, streaming, and cloud. AI-driven security, transparent policies, and strict controls safeguard expanding digital ecosystems.',
      },
      {
        title: '5G & Future Privacy',
        description:
          '5G powers smart cities and devices but increases risks. Privacy-first networks with encryption and intrusion detection ensure safe communication.',
      },
      {
        title: 'IoT & Data Privacy',
        description:
          'IoT devices constantly collect sensitive data. Strong authentication, secure coding, and timely updates are essential to prevent cyberattacks.',
      },
    ],
    text: 'Our Working Strategy',
    steps: commonSteps,
  },

  automation: {
    heroImage:
      'assets/Industries/telecommunicationSubPages/automation-hero.jpg',
    whyheader: 'How Is Automation Changing the Future of Telecom?',
    smallHeading: 'Exploring smarter networks and faster communication',
    whyList: [
      {
        title: 'Automation in Action',
        description:
          'Automation streamlines communication, reducing errors and saving time. IT and telecom achieve efficiency, faster engagement, and better customer service.',
      },
      {
        title: 'Future of Telecom',
        description:
          'Automation manages massive customer requests, predicts needs, reduces support workload, cuts costs, and delivers faster, more reliable telecom services.',
      },
      {
        title: 'Seamless Engagement',
        description:
          'Automated alerts and updates across SMS, email, and chat ensure instant responses, boosting customer trust, loyalty, and satisfaction.',
      },
      {
        title: 'Automation in IT Services',
        description:
          'Automation improves workflows with real-time notifications, status updates, and ticketing. IT teams reduce errors, minimize downtime, and focus innovation.',
      },
    ],
    text: 'Our Healthcare Security Approach',
    steps: commonSteps,
  },

  infrastructure: {
    heroImage:
      'assets/Industries/telecommunicationSubPages/infrastructure-hero.jpg',
    whyheader:
      'What Makes Strong Infrastructure the Backbone of IT and Telecom?',
    smallHeading:
      ' Understanding why reliable systems keep businesses connected.',
    whyList: [
      {
        title: 'Networking & Cloud Backbone',
        description:
          'Reliable networking and cloud infrastructure drive digital growth, enabling secure communication, scalability, remote work, and faster global business innovation.',
      },
      {
        title: 'Data Centers Powering Digital Era',
        description:
          'Modern data centers ensure secure, sustainable, high-speed access to information. They are critical powerhouses driving apps, websites, and online services.',
      },
      {
        title: 'Infrastructure for AI & Automation',
        description:
          'AI and automation need strong infrastructure: fast processing, reliable connectivity, secure storage. Without it, innovation slows, and opportunities disappear.',
      },
      {
        title: 'Smart & Modern Infrastructure',
        description:
          'Shifting from legacy to smart systems delivers flexibility, resilience, predictive monitoring, and security shaping a future-ready, adaptive digital ecosystem.',
      },
    ],
    text: 'Our Strategy for Financial Cybersecurity',
    steps: commonSteps,
  },

  managedSolutions: {
    heroImage:
      'assets/Industries/telecommunicationSubPages/managed-solutions.jpg',
    whyheader: ' Why Choose Managed Solutions for Your Business?',
    smallHeading: 'Unlock productivity with dependable IT services.',
    whyList: [
      {
        title: 'Smooth Operations',
        description:
          'SprintPark’s Managed Solutions simplify IT by handling servers, storage, devices, and security. Proactive care ensures stability, efficiency, and growth.',
      },
      {
        title: 'Reliable Business Performance',
        description:
          'We manage servers, devices, printers, and cybersecurity with continuous monitoring, reducing downtime and boosting productivity for everyday business success.',
      },
      {
        title: 'Simplifying IT Complexity',
        description:
          'SprintPark experts streamline infrastructure, networks, and security. Our Managed Solutions minimize risks, simplify operations, and enable confident, scalable business growth.',
      },
      {
        title: 'Complete IT Care',
        description:
          'All-in-one IT support with 24/7 monitoring. SprintPark manages devices, servers, and security, keeping systems efficient, secure, and future-ready.',
      },
    ],
    text: 'Our Strategy for Financial Cybersecurity',
    steps: commonSteps,
  },
};
@Component({
  selector: 'app-telecommunication-i',
  imports: [IndustrySubUtilComponent, CommonModule],
  templateUrl: './telecommunication-i.component.html',
  styleUrl: './telecommunication-i.component.scss',
})
export class TelecommunicationIComponent implements OnInit {
  route = inject(ActivatedRoute);
  currentSectionData!: Section;

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const rawKey = params.get('section') || 'dataPrivacy';
      const sectionKey = rawKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

      this.currentSectionData =
        sectionsData[sectionKey] ?? sectionsData['dataPrivacy'];
    });
  }
}

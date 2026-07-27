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
  itConsulting: {
    heroImage:
      'assets/Industries/transportation-SubPages/it-consulting-digital-solution.jpg',
    whyheader:
      'How Can IT Consulting & Digital Solutions Transform Transportation & Logistics?',
    smallHeading:
      'Driving efficiency, transparency, and smarter decision-making through digital innovation.',
    text: 'Our Working Strategy',
    whyList: [
      {
        title: 'Digital Supply Chains',
        description:
          'IT consulting integrates logistics systems, providing real-time visibility, predictive insights, and smoother operations for efficient, cost-effective supply chain management.',
      },
      {
        title: 'Fleet & Warehouse Optimization',
        description:
          'GPS, IoT, AI, and robotics streamline fleet tracking and warehouse automation, reducing errors, improving accuracy, and speeding up deliveries.',
      },
      {
        title: 'Data-Driven Decisions & Security',
        description:
          'Analytics enable smarter logistics decisions, while cybersecurity safeguards sensitive data, ensuring operational reliability, compliance, and customer trust across all processes.',
      },
      {
        title: 'Scalable & Future-Ready Operations',
        description:
          'Cloud platforms and emerging technologies enhance scalability, agility, and resilience, preparing logistics businesses for growth and evolving market demands.',
      },
    ],
    steps: commonSteps,
  },
  networkEngineering: {
    heroImage:
      'assets/Industries/transportation-SubPages/network-engineering.jpg',
    whyheader:
      'How Can Network Engineering & Connectivity Revolutionize Transportation & Logistics?',
    smallHeading:
      ' Building reliable, secure, and high-speed networks to keep transportation systems connected and efficient.',
    text: 'Our Working Strategy',
    whyList: [
      {
        title: 'Seamless Connectivity',
        description:
          'Network engineering enables uninterrupted communication across fleets, warehouses, ports, and hubs, supporting real-time tracking, automation, and efficient logistics operations.',
      },
      {
        title: 'IoT & 5G Integration',
        description:
          'IoT sensors and 5G networks allow real-time asset tracking, instant route adjustments, and advanced features like autonomous deliveries.',
      },
      {
        title: 'Secure & Smart Systems',
        description:
          'Cybersecurity, firewalls, and encryption protect logistics networks, while smart hubs and ports improve coordination, speed, and operational efficiency.',
      },
      {
        title: 'Scalable Infrastructure',
        description:
          'Modern networks support business growth by integrating new technologies, increasing connected devices, and ensuring adaptable, future-ready logistics operations.',
      },
    ],
    steps: commonSteps,
  },
  salesforceAI: {
    heroImage:
      'assets/Industries/transportation-SubPages/salesforce-ai-automation.jpg',
    whyheader:
      'How Can Salesforce & AI Automations Transform Transportation and Logistics?',
    smallHeading:
      'Streamlining logistics operations with intelligent automation and customer-focused Salesforce solutions.',
    text: 'Our Working Strategy',
    whyList: [
      {
        title: 'Intelligent CRM',
        description:
          'Salesforce centralizes client interactions, while AI predicts needs, automates responses, and enhances proactive customer engagement for logistics providers.',
      },
      {
        title: 'Predictive Operations',
        description:
          'AI analyzes historical shipping data and trends, enabling accurate demand forecasting, optimized fleet usage, and reduced overcapacity issues.',
      },
      {
        title: 'Automation & Visibility',
        description:
          'Salesforce automates order processing, compliance, and documentation, while AI provides real-time shipment tracking, reducing errors and delays.',
      },
      {
        title: 'Data-Driven Insights',
        description:
          'AI-powered dashboards deliver actionable insights on routes, fleet efficiency, and customer behavior, enabling smarter logistics decisions and cost reduction.',
      },
    ],
    steps: commonSteps,
  },
};

@Component({
  selector: 'app-transportation-i',
  imports: [IndustrySubUtilComponent, CommonModule],
  templateUrl: './transportation-i.component.html',
  styleUrl: './transportation-i.component.scss',
})
export class TransportationIComponent implements OnInit {
  route = inject(ActivatedRoute);
  currentSectionData!: Section;

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const rawKey = params.get('section') || 'itConsulting';

      // convert dash-case → camelCase
      const sectionKey = rawKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

      this.currentSectionData =
        sectionsData[sectionKey] ?? sectionsData['itConsulting'];
    });
  }
}

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
  BigData: {
    heroImage: 'assets/Industries/bankingSubPages/big-data.jpg',
    whyheader: 'How Can Big Data Transform the Future of Banking?',
    smallHeading: 'Customer trust begins with secure communication.',
    whyList: [
      {
        title: 'Fraud Detection',
        description:
          'Big Data identifies unusual transaction patterns in real time, preventing fraud, protecting assets, and safeguarding both customers and institutions.',
      },
      {
        title: 'Personalized Banking',
        description:
          'Analytics tailors financial services, including loans and investments, enhancing customer satisfaction, loyalty, and long-term engagement through data-driven insights.',
      },
      {
        title: 'Operational Efficiency',
        description:
          'Big Data streamlines workflows, optimizes resources, and boosts productivity, enabling banks to reduce costs and improve service delivery speed.',
      },
      {
        title: 'Risk & Market Insights',
        description:
          'Predictive analytics improves credit scoring, regulatory compliance, cybersecurity, and market analysis, empowering banks to make informed, data-driven decisions.',
      },
    ],
    text: 'Our Working Strategy',
    steps: commonSteps,
  },

  Cybersecurity: {
    heroImage:
      'assets/Industries/telecommunicationSubPages/automation-hero.jpg',
    whyheader: 'Why Is Cybersecurity Essential for Modern Banking?',
    smallHeading:
      'Safeguarding customer trust, financial assets, and digital operations in an evolving threat landscape.',
    text: 'Our Healthcare Security Approach',
    whyList: [
      {
        title: 'Advanced Threat Protection',
        description:
          'AI and machine learning monitor transactions in real time, detecting hacking attempts, insider threats, and malware to prevent financial losses.',
      },
      {
        title: 'Secure Transactions and Access',
        description:
          'End-to-end encryption, multi-factor authentication, and identity management ensure only authorized users access sensitive banking data and systems.',
      },
      {
        title: 'Fraud Prevention and Compliance',
        description:
          'Cybersecurity frameworks detect fraudulent activity, support AML measures, and maintain regulatory compliance, protecting banks and customers from financial crimes.',
      },
      {
        title: 'Employee Training and Recovery',
        description:
          'Staff awareness programs, incident response plans, and cloud security strategies strengthen defenses, ensuring continuity, trust, and safe digital banking experiences.',
      },
    ],

    steps: commonSteps,
  },
  ProjectManagement: {
    heroImage: 'assets/Industries/bankingSubPages/project-management.jpg',
    whyheader: 'How Does Project Management Drive Success in Banking?',
    smallHeading:
      ' Ensuring efficiency, compliance, and customer value in financial transformation initiatives.',
    whyList: [
      {
        title: 'Strategic Project Alignment',
        description:
          'Projects in banking align with business goals, ensuring digital transformation, compliance, and product initiatives deliver measurable organizational value.',
      },
      {
        title: 'Resource and Risk Management',
        description:
          'Project managers optimize people, budgets, and technology while identifying and mitigating risks like delays, cybersecurity threats, or vendor issues.',
      },
      {
        title: 'Technology Integration and Compliance',
        description:
          'From core banking systems to AI tools, projects integrate technology smoothly, maintain regulatory compliance, and support scalable, secure banking operations.',
      },
      {
        title: 'Stakeholder Communication and Improvement',
        description:
          'Clear communication, performance tracking, and post-project reviews enhance transparency, customer satisfaction, and continuous innovation across banking initiatives.',
      },
    ],
    text: 'Our Working Strategy',
    steps: commonSteps,
  },
  AI: {
    heroImage: 'assets/Industries/bankingSubPages/artificial-intelligence.jpg',
    whyheader: ' How Is Artificial Intelligence Transforming Modern Banking?',
    smallHeading:
      'Leveraging AI to enhance customer experiences, streamline operations, and strengthen security in the financial sector.',
    whyList: [
      {
        title: 'Personalized Customer Experience',
        description:
          'AI analyzes customer data to deliver tailored advice, product recommendations, and spending insights, boosting satisfaction, loyalty, and engagement.',
      },
      {
        title: 'Fraud Detection and Security',
        description:
          'Advanced AI monitors transactions, detects suspicious activity, and strengthens cybersecurity, preventing fraud while protecting banking systems and customer assets.',
      },
      {
        title: 'Process Automation and Efficiency',
        description:
          'Repetitive banking tasks like KYC, account opening, and compliance reporting are automated with AI, reducing costs and improving operational efficiency.',
      },
      {
        title: 'Predictive Analytics and Decision-Making',
        description:
          'AI-driven insights forecast market trends, assess credit risk, and support informed investments, enabling smarter, data-driven strategic decisions.',
      },
    ],
    text: 'Our Working Strategy',
    steps: commonSteps,
  },
};

@Component({
  selector: 'app-banking-i',
  imports: [IndustrySubUtilComponent, CommonModule],
  templateUrl: './banking-i.component.html',
  styleUrl: './banking-i.component.scss',
})
export class BankingIComponent implements OnInit {
  route = inject(ActivatedRoute);
  currentSectionData!: Section;
  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const rawKey = params.get('section') || 'big-data';

      // Convert kebab-case → PascalCase
      const sectionKey = rawKey
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

      // Handle AI explicitly
      const normalizedKey =
        sectionKey.toLowerCase() === 'ai' ? 'AI' : sectionKey;

      this.currentSectionData =
        sectionsData[normalizedKey] ?? sectionsData['BigData'];
    });
  }
}

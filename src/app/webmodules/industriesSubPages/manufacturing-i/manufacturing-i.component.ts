import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustrySubUtilComponent } from '../../utilities/industry-sub-util/industry-sub-util.component';
import { CommonModule } from '@angular/common';
import { SubCardsComponent } from '../../utilities/sub-cards/sub-cards.component';
import { MapSectionComponent } from '../../utilities/map-section/map-section.component';

interface Section {
  heroImage: string;
  heroHeading: string;
  smallHeading: string;
  whyList: Array<{ title: string; description: string }>;
  steps?: Array<{ title: string; description: string; icon?: string }>;
  text?: string;
}
const commonSteps = [
  {
    title: 'Understand',
    icon: 'assets/Industries/understand.svg',
    description: 'We learn about your business challenges, goals and ambitions, strategic drivers and culture.'
  },
  {
    title: 'Assess',
    icon: 'assets/Industries/access.svg',
    description: 'We assess your current risk position relative to your needs and goals, and develop a roadmap for optimizing your cybersecurity.'
  },
  {
    title: 'Design',
    icon: 'assets/Industries/design.svg',
    description: 'We design solutions, processes and strategies that allow you to achieve the desired state of security and effectiveness.'
  },
  {
    title: 'Implement',
    icon: 'assets/Industries/implement.svg',
    description: 'We draw on our experience and expertise to implement the agreed technical solutions, governance, compliance frameworks and migration processes.'
  },
  {
    title: 'Manage and Optimize',
    icon: 'assets/Industries/manage-and-optimize.svg',
    description: 'We operate to deliver tangible, value-added cyber security on a 24/7 basis. We use our methodology to evolve and optimize your solution over time, to maximize value.'
  }
];
@Component({
  selector: 'app-manufacturing-i',
  imports: [IndustrySubUtilComponent, CommonModule, SubCardsComponent, MapSectionComponent],
  templateUrl: './manufacturing-i.component.html',
  styleUrls: ['./manufacturing-i.component.scss']
})
export class ManufacturingIComponent {
  currentSection = 'salesforceIntegration';
  private route = inject(ActivatedRoute);

  sections: Record<string, Section> = {
    salesforceIntegration: {
      heroImage: 'assets/Industries/Manufacturing-SubPages/salesforce-integration.jpg',
      heroHeading: 'How Can Salesforce Integration Transform Manufacturing Operations?',
      smallHeading: 'Connecting systems to streamline workflows and enhance decision-making.',
      text: 'Our Working Strategy',
      whyList: [
        {
          title: 'Unified Data & Demand Forecasting',
          description: 'Salesforce connects ERP, CRM, and production data, creating a single source of truth for accurate demand planning and optimized production schedules.',
        },
        {
          title: 'Streamlined Orders & Field Service',
          description: 'Integration accelerates order-to-cash cycles with real-time updates, while connected field service tools reduce downtime and boost customer satisfaction.',
        },
        {
          title: 'Data-Driven Decisions & Supplier Collaboration',
          description: 'Dashboards empower managers with insights across operations, while supplier integration enhances communication, prevents disruptions, and strengthens supply chain performance.',
        },
        {
          title: 'Delivering Exceptional Customer Experiences',
          description: 'With connected sales, service, and product data, Salesforce enables proactive engagement, personalized solutions, and long-term customer loyalty in manufacturing.',
        },
      ],
      steps: commonSteps,
    },
    dataAnalytics: {
      heroImage: 'assets/Industries/Manufacturing-SubPages/advanced-data-analytics.jpg',
      heroHeading: 'How Can Advanced Data Analytics Revolutionize Manufacturing?',
      smallHeading: 'Unlocking insights to optimize productlon, reduce costs, and Improve decision-making.',
      text: 'Our Working Strategy',
      whyList: [
        {
          title: 'Smarter Maintenance & Production Planning',
          description: 'Predictive analytics detects equipment issues early, preventing costly downtime and extending machine life. Data-driven forecasting aligns production with demand, reducing waste and ensuring timely delivery.',
        },
        {
          title: 'Quality Control & Supply Chain Visibility',
          description: 'Real-time monitoring improves product quality by detecting defects instantly. Analytics also enhances supply chain transparency, reducing delays, improving collaboration, and strengthening resilience.',
        },
        {
          title: 'Energy Efficiency & Resource Optimization',
          description: 'Manufacturers can cut costs and support sustainability by identifying energy inefficiencies and optimizing raw material usage across operations.',
        },
        {
          title: 'Demand Forecasting & Agile Decision-Making',
          description: 'By combining sales history with market trends, analytics improves demand accuracy. AI-powered dashboards enable leaders to make faster, data-backed decisions for greater competitiveness.',
        },
      ],
      steps: commonSteps,
    },
    projectManagement: {
      heroImage: 'assets/Industries/Manufacturing-SubPages/expert-project-management.jpg',
      heroHeading: 'How Can Expert Project Management Drive Manufacturing Success?',
      smallHeading: 'Delivering elficieney, innovation, and rellabilty through structured execulion.',
      text: 'Our Working Strategy',
      whyList: [
        {
          title: 'Streamlined Execution & Resource Optimization',
          description: 'Expert project management applies structured frameworks to reduce inefficiencies, eliminate redundancies, and allocate resources wisely. This ensures smoother workflows and maximum impact across the manufacturing lifecycle.',
        },
        {
          title: 'Risk Mitigation & Time Management',
          description: 'Project managers anticipate supply chain delays, equipment issues, and regulatory hurdles early. Using Agile, Lean, and Six Sigma practices, they minimize disruptions while keeping projects on schedule.',
        },
        {
          title: 'Cost Control & Compliance',
          description: 'Through real-time tracking, project managers keep expenses under control while embedding compliance and quality standards at every stage—ensuring products meet market and regulatory expectations.',
        },
        {
          title: 'Collaboration & Continuous Improvement',
          description: 'Cross-functional teams—from engineers to QA—work cohesively under guided frameworks. Post-project evaluations capture lessons learned, driving innovation and continuous improvement for future success.',
        },
      ],
      steps: commonSteps,
    },
    ITConsulting: {
      heroImage: 'assets/Industries/Manufacturing-SubPages/strategic-it-consulting.jpg',
      heroHeading: 'How Can Strategic IT Consulting Transform Manufacturing?',
      smallHeading: 'Driving digital transformation, operational ellciency, and innovation',
      text: 'Our Working Strategy',
      whyList: [
        {
          title: 'Aligning IT with Business & Driving Transformation',
          description: 'Strategic IT consulting ensures technology investments support cost reduction, efficiency, and innovation. Clear digital roadmaps guide manufacturers in modernizing operations and building future-ready ecosystems.',
        },
        {
          title: 'Optimizing Supply Chains & Leveraging Tech',
          description: 'Through analytics and automation, IT consulting improves supply chain visibility and reduces bottlenecks. Emerging technologies like AI, IoT, and smart factories enhance productivity and minimize downtime.',
        },
        {
          title: 'Data-Driven Decision-Making & Cost Reduction',
          description: 'Data analytics frameworks empower manufacturers with actionable insights and evidence-based decisions. IT optimization identifies inefficiencies, enabling cost savings through cloud adoption and automation.',
        },
        {
          title: 'Building Scalable & Agile IT Systems',
          description: 'Consultants design flexible IT strategies that adapt to changing markets and technologies. Scalable systems strengthen resilience, ensuring long-term competitiveness in a fast-evolving industrial landscape.',
        },
      ],
      steps: commonSteps,
    },
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const section = params.get('section');
      if (section && this.sections[section]) {
        this.currentSection = section;
      } else {
        this.currentSection = 'salesforceIntegration';
      }
    });
  }

  get sectionData(): Section {
    return this.sections[this.currentSection];
  }
}

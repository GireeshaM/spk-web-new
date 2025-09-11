import { Component, inject, OnInit } from '@angular/core';
import { IndustrySubUtilComponent } from '../../utilities/industry-sub-util/industry-sub-util.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manufacturing',
  imports: [IndustrySubUtilComponent, CommonModule],
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.scss',
})
export class ManufacturingIComponent implements OnInit {
  public currentSection = 'salesforceIntegration';
  route = inject(ActivatedRoute);
  public sections = {
    salesforceIntegration: {
      heroImage: '/assets/industries/manufacturing/salesforceIntegration.png',
      heroHeading:
        'How Can Salesforce Integration Transform Manufacturing Operations?',
      subHeading:
        'Connecting systems to streamline workflows and enhance decision-making.',
      introText:
        'Salesforce integration in the manufacturing sector enables seamless data flow across sales, operations, and customer service platforms. By connecting ERP, CRM, and production systems, manufacturers gain a 360° view of their operations. This unified approach boosts efficiency, improves demand forecasting, strengthens customer relationships, and ensures better resource utilization. With real-time insights, businesses can respond faster to market changes and deliver greater value to customers.',
      points: [
        {
          title: 'Unified Customer View',
          description:
            'Integration combines data from multiple sources into Salesforce, giving manufacturers a single source of truth. This helps sales teams understand customer needs better and provide personalized solutions.',
        },
        {
          title: 'Improved Demand Forecasting',
          description:
            'By connecting sales and production data, manufacturers can analyze customer trends more accurately. This leads to better demand planning, reduced stockouts, and optimized production schedules.',
        },
        {
          title: 'Streamlined Order Management',
          description:
            'Salesforce integration simplifies the order-to-cash cycle by connecting CRM with ERP systems. This ensures real-time updates on order status, reducing delays and enhancing customer satisfaction.',
        },
        {
          title: 'Enhanced Field Service Efficiency',
          description:
            'Manufacturers can use Salesforce to assign service tasks, track technician availability, and monitor maintenance schedules. Integration ensures quick resolution of issues and minimizes machine downtime.',
        },
        {
          title: 'Data-Driven Decision Making',
          description:
            'With dashboards and analytics powered by Salesforce, managers can monitor KPIs across production, inventory, and sales. This enables faster and smarter business decisions.',
        },
        {
          title: 'Stronger Supplier Collaboration',
          description:
            'Integrating supplier data into Salesforce improves communication and collaboration. Manufacturers gain visibility into supply chain performance, helping prevent disruptions.',
        },
        {
          title: 'Better Customer Experience',
          description:
            'By connecting service, sales, and product data, Salesforce enables proactive engagement. Manufacturers can anticipate customer needs, offer faster support, and build long-term loyalty.',
        },
      ],
    },
    dataAnalytics: {
      heroImage: '/assets/industries/manufacturing/dataAnalytics.png',
      heroHeading:
        'How Can Advanced Data Analytics Revolutionize Manufacturing?',
      subHeading:
        'Unlocking insights to optimize production, reduce costs, and improve decision-making.',
      introText:
        'Advanced data analytics empowers manufacturers to harness data from machines, supply chains, and customer interactions. By leveraging predictive models, real-time monitoring, and AI-driven insights, manufacturers can minimize downtime, forecast demand more accurately, and optimize resource allocation. This approach enhances efficiency, drives innovation, and creates a competitive edge in a rapidly evolving industrial landscape.',
      points: [
        {
          title: 'Predictive Maintenance',
          description:
            'Analytics identifies early warning signs of equipment failures by analyzing sensor and machine data. This helps prevent costly downtime, extends machine lifespan, and lowers maintenance expenses.',
        },
        {
          title: 'Optimized Production Planning',
          description:
            'Data-driven forecasting aligns production schedules with demand trends. This reduces overproduction, eliminates bottlenecks, and ensures timely product delivery.',
        },
        {
          title: 'Quality Control and Defect Reduction',
          description:
            'Advanced analytics monitors production quality in real time, detecting anomalies quickly. This reduces defective outputs, improves product consistency, and builds customer trust.',
        },
        {
          title: 'Enhanced Supply Chain Visibility',
          description:
            'By analyzing supplier, logistics, and inventory data, manufacturers gain end-to-end supply chain transparency. This improves collaboration, reduces delays, and enhances resilience against disruptions.',
        },
        {
          title: 'Energy and Resource Optimization',
          description:
            'Analytics helps identify energy inefficiencies across factories. Manufacturers can reduce energy consumption, optimize raw material use, and cut costs while supporting sustainability goals.',
        },
        {
          title: 'Smarter Demand Forecasting',
          description:
            'Combining historical sales with market trends, analytics improves demand predictions. This ensures the right products are produced at the right time, avoiding shortages or excess stock.',
        },
        {
          title: 'Faster and Smarter Decision-Making',
          description:
            'With advanced dashboards and AI-driven insights, executives can make data-backed decisions quickly. This agility strengthens competitiveness and helps organizations adapt to changing market needs.',
        },
      ],
    },

    projectManagement: {
      heroImage: '/assets/industries/manufacturing/projectManagement.png',
      heroHeading:
        'How Can Expert Project Management Drive Manufacturing Success?',
      subHeading:
        'Delivering efficiency, innovation, and reliability through structured execution.',
      introText:
        'Expert project management ensures that manufacturing initiatives are executed with precision, efficiency, and accountability. By aligning strategies with clear goals, optimizing resources, and mitigating risks, organizations can achieve faster delivery, improved quality, and cost-effective operations. Through proven methodologies and advanced tools, expert project management enhances collaboration, reduces delays, and builds long-term resilience in manufacturing projects.',
      points: [
        {
          title: 'Streamlined Project Execution',
          description:
            'Expert project management introduces structured frameworks that reduce inefficiencies, eliminate redundancies, and ensure smooth project delivery across the manufacturing lifecycle.',
        },
        {
          title: 'Effective Resource Allocation',
          description:
            'By analyzing workforce, materials, and capital requirements, managers can allocate resources optimally. This reduces waste and ensures critical tasks are prioritized for maximum impact.',
        },
        {
          title: 'Risk Anticipation and Mitigation',
          description:
            'Manufacturing projects face challenges like supply chain delays, equipment issues, and regulatory hurdles. Project managers identify risks early and implement safeguards to minimize disruptions.',
        },
        {
          title: 'Improved Time Management',
          description:
            'Project management techniques such as Agile, Lean, and Six Sigma enable faster execution. This helps manufacturers meet deadlines without compromising quality.',
        },
        {
          title: 'Cost Control and Budget Optimization',
          description:
            'Through real-time tracking and performance monitoring, expert project managers keep expenses within budget while maximizing returns on investment.',
        },
        {
          title: 'Enhanced Collaboration Across Teams',
          description:
            'Cross-functional teams—from engineers to quality assurance—work cohesively under guided project frameworks. This reduces communication gaps and strengthens accountability.',
        },
        {
          title: 'Focus on Compliance and Quality',
          description:
            'Expert project management integrates compliance requirements and quality standards into each stage of manufacturing projects, ensuring products meet regulatory and market expectations.',
        },
        {
          title: 'Continuous Improvement for Future Projects',
          description:
            'Post-project evaluations help identify lessons learned, fostering a culture of innovation and continuous improvement for upcoming manufacturing projects.',
        },
      ],
    },
    ITConsulting: {
      heroImage: 'assets/industries/manufacturing/projectManagement.png',
      heroHeading: 'How Can Strategic IT Consulting Transform Manufacturing?',
      subHeading:
        'Driving digital transformation, operational efficiency, and innovation.',
      introText:
        'Expert project management ensures that manufacturing initiatives are executed with precision, efficiency, and accountability. By aligning strategies with clear goals, optimizing resources, and mitigating risks, organizations can achieve faster delivery, improved quality, and cost-effective operations. Through proven methodologies and advanced tools, expert project management enhances collaboration, reduces delays, and builds long-term resilience in manufacturing projects.',
      points: [
        {
          title: 'Aligning IT with Business Goals',
          description:
            'Strategic IT consulting ensures technology investments directly support manufacturing objectives such as cost reduction, efficiency, and innovation. This alignment helps maximize business outcomes.',
        },
        {
          title: 'Digital Transformation Roadmaps',
          description:
            'Consultants create clear roadmaps for modernizing operations, adopting smart technologies, and gradually transitioning from traditional systems to future-ready digital ecosystems.',
        },
        {
          title: 'Optimizing Supply Chain Efficiency',
          description:
            'By leveraging advanced analytics and automation, IT consulting helps manufacturers gain visibility into supply chains, reduce bottlenecks, and improve delivery timelines.',
        },
        {
          title: 'Leveraging Emerging Technologies',
          description:
            'From AI-driven predictive maintenance to IoT-enabled smart factories, consultants guide manufacturers in adopting innovative tools that improve productivity and reduce downtime.',
        },
        {
          title: 'Improving Decision-Making with Data',
          description:
            'Data analytics frameworks enable manufacturers to extract actionable insights, monitor performance, and make faster, evidence-based business decisions.',
        },
        {
          title: 'Cost Reduction Through IT Optimization',
          description:
            'Consulting identifies inefficiencies in existing IT systems and recommends cost-effective solutions, including cloud adoption and automation, to reduce operational expenses.',
        },
        {
          title: 'Building Scalable and Agile IT Systems',
          description:
            'Future-focused IT strategies ensure systems can adapt to new challenges, market shifts, and technological advancements while maintaining long-term scalability.',
        },
      ],
    },
  };
  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const section = params.get('section');
      if (section && this.sections[section as keyof typeof this.sections]) {
        this.currentSection = section;
      }
    });
  }
  public get sectionData(): (typeof this.sections)[keyof typeof this.sections] {
    return this.sections[this.currentSection as keyof typeof this.sections];
  }
}

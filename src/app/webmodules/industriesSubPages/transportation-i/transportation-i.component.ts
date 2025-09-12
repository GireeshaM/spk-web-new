import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustrySubUtilComponent } from '../../utilities/industry-sub-util/industry-sub-util.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transportation-i',
  imports: [IndustrySubUtilComponent, CommonModule],
  templateUrl: './transportation-i.component.html',
  styleUrl: './transportation-i.component.scss'
})
export class TransportationIComponent {
public currentSection = 'itConsulting';

  route = inject(ActivatedRoute);
  public sections = {
    itConsulting: {
      heroImage: 'assets/Industries/transportation-SubPages/it-consulting-digital-solution.png',
      heroHeading:
        'How Can IT Consulting & Digital Solutions Transform Transportation & Logistics?',
      subHeading:
        'Driving efficiency, transparency, and smarter decision-making through digital innovation.',
      introText: `In the fast-moving transportation and logistics sector, IT consulting and digital solutions play a vital role
      in modernizing operations. From streamlining supply chains and automating workflows to integrating real-time tracking systems,
      these solutions empower businesses to reduce costs, improve delivery accuracy, and enhance customer satisfaction.`,
      points: [
        {
          title: 'Digital Supply Chain Transformation',
          description:
            'Consulting services enable logistics companies to redesign their supply chain with advanced digital platforms, integrating data from suppliers, distributors, and carriers.',
        },
        {
          title: 'Fleet Management Optimization',
          description:
            'Organizations can track, monitor, and manage fleets with GPS, IoT devices, and telematics to improve efficiency and reduce costs.',
        },
        {
          title: 'Smart Warehousing Solutions',
          description:
            'Digital tools such as AI, robotics, and IoT sensors transform warehouses into smart hubs, improving accuracy and minimizing errors.',
        },
        {
          title: 'Real-Time Data Analytics',
          description:
            'Big data and analytics anticipate demand, optimize routes, and identify inefficiencies with dashboards that aid decision-making.',
        },
        {
          title: 'Cybersecurity & Compliance',
          description:
            'IT experts implement strong measures to protect against cyber threats, ensure compliance, and safeguard sensitive data.',
        },
        {
          title: 'Cloud-Based Collaboration Platforms',
          description:
            'Cloud solutions enable seamless collaboration between shippers, carriers, and customers.',
        },
        {
          title: 'Last-Mile Delivery Innovation',
          description:
            'AI-driven planning and smart lockers improve transparency, timeliness, and service quality.',
        },
        {
          title: 'Scalability & Future-Readiness',
          description:
            'Builds infrastructures that adapt to growth, leveraging AI and blockchain for resilience.',
        },
      ],
    },

    networkEngineering: {
      heroImage: 'assets/Industries/transportation-SubPages/networkin-engineering-connectivity.png',
      heroHeading:
        'How Can Network Engineering & Connectivity Revolutionize Transportation & Logistics?',
      subHeading:
        'Building reliable, secure, and high-speed networks to keep transportation systems connected and efficient.',
      introText: `In transportation and logistics, seamless connectivity is the backbone of modern operations. Network engineering ensures uninterrupted communication
      across fleets, warehouses, ports, and distribution hubs. With strong and secure networks, companies can manage real-time tracking, automate workflows,
      and streamline data sharing.`,
      points: [
        {
          title: 'Reliable Fleet Communication Systems',
          description:
            'Robust networks enable communication between drivers, dispatch centers, and customers to deliver services with precision.',
        },
        {
          title: 'IoT-Enabled Asset Tracking',
          description:
            'Embedded IoT sensors allow tracking goods in real time and ensure uninterrupted data flow.',
        },
        {
          title: 'High-Speed Connectivity with 5G',
          description:
            'Ultra-fast 5G enables real-time adjustments, autonomous vehicles, and drone deliveries.',
        },
        {
          title: 'Smart Port & Airport Connectivity',
          description:
            'Strengthens communication systems across ports and airports for better coordination.',
        },
        {
          title: 'Cybersecurity in Connected Systems',
          description:
            'Firewalls, encryption, and secure protocols safeguard customer and shipment data.',
        },
        {
          title: 'Warehouse & Hub Connectivity',
          description:
            'Strong internal networks help automation tools like robotic systems and inventory trackers.',
        },
        {
          title: 'Scalability for Future Growth',
          description:
            'Ensures logistics systems can adapt to new technologies and business expansion.',
        },
      ],
    },
    salesforceAI: {
      heroImage: 'assets/Industries/transportation-SubPages/salesforce-ai-automation.png',
      heroHeading:
        'How Can Salesforce & AI Automations Transform Transportation and Logistics?',
      subHeading:
        'Streamlining logistics operations with intelligent automation and customer-focused Salesforce solutions.',
      introText: `In today’s fast-moving logistics industry, efficiency, visibility, and customer satisfaction are key to success.
      Salesforce, combined with AI-driven automation, helps logistics companies optimize customer engagement, automate workflows,
      and predict demand patterns with high accuracy. By integrating AI into Salesforce platforms, transportation providers can enhance
      service delivery, minimize delays, reduce costs, and personalize experiences for clients.`,
      points: [
        {
          title: 'Intelligent Customer Relationship Management (CRM)',
          description:
            'Salesforce offers a centralized platform to track client interactions, inquiries, and service requests. AI automation enhances this by predicting customer needs and providing proactive solutions.',
        },
        {
          title: 'Predictive Demand Forecasting',
          description:
            'AI algorithms analyze historical shipping data, seasonal trends, and external factors to forecast demand. This helps logistics providers optimize fleet usage and reduce overcapacity issues.',
        },
        {
          title: 'Automated Order Processing',
          description:
            'With Salesforce automation, orders move seamlessly from booking to dispatch without manual intervention. This reduces errors, speeds delivery timelines, and enhances customer satisfaction.',
        },
        {
          title: 'Real-Time Shipment Visibility',
          description:
            'AI and Salesforce integration provide end-to-end shipment tracking for customers and logistics managers with automated alerts that ensure transparency.',
        },
        {
          title: 'Enhanced Customer Engagement',
          description:
            'AI-powered chatbots and automated systems help logistics companies provide 24/7 support, handle queries, and improve response times.',
        },
        {
          title: 'Optimized Route Planning',
          description:
            'AI-driven Salesforce solutions suggest efficient routes based on traffic, weather, and fuel costs, minimizing delays and lowering costs.',
        },
        {
          title: 'Automated Compliance & Documentation',
          description:
            'Salesforce workflows combined with AI generate, validate, and manage shipping documents, ensuring adherence to regulations.',
        },
        {
          title: 'Data-Driven Business Insights',
          description:
            'With Salesforce dashboards powered by AI, logistics companies gain insights into customer behavior, fleet efficiency, and revenue patterns for smarter decisions.',
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
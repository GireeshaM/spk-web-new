import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustrySubUtilComponent } from '../../utilities/industry-sub-util/industry-sub-util.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banking-i',
  imports: [IndustrySubUtilComponent, CommonModule],
  templateUrl: './banking-i.component.html',
  styleUrl: './banking-i.component.scss'
})
export class BankingIComponent {
 public currentSection = 'CybersecurityBanking';
  route = inject(ActivatedRoute);
  public sections = {
    //BigData
    BigData: {
      heroImage: 'assets/Industries/bankingSubPages/big-data.jpg',
      heroHeading: 'How Can Big Data Transform the Future of Banking?',
      subHeading:
        'Unlocking insights for smarter decisions, better security, and enhanced customer experiences.',
      introText:
        'Big Data is revolutionizing the banking sector by enabling institutions to analyze massive volumes of structured and unstructured data. From improving fraud detection to offering personalized financial services, Big Data helps banks make informed decisions, reduce risks, and increase efficiency. By leveraging predictive analytics, banks can anticipate customer needs, ensure regulatory compliance, and gain a competitive edge in today’s data-driven economy.',
      points: [
        {
          title: 'Fraud Detection and Prevention',
          description:
            'Big Data analytics allows banks to detect unusual patterns in real-time transactions. By analyzing customer behaviors and comparing them with historical data, banks can quickly identify fraud attempts, minimize risks, and protect both customer assets and institutional reputation.',
        },
        {
          title: 'Personalized Banking Services',
          description:
            'Banks can use Big Data to tailor services according to individual customer preferences. From customized loan offers to targeted investment plans, data-driven personalization ensures higher customer satisfaction and long-term loyalty.',
        },
        {
          title: 'Risk Assessment and Credit Scoring',
          description:
            'Traditional credit scoring models rely on limited financial history, but Big Data enables banks to include alternative data sources like spending patterns, online behavior, and even social media activity. This leads to more accurate credit risk evaluations and responsible lending decisions.',
        },
        {
          title: 'Regulatory Compliance and Reporting',
          description:
            'Compliance is a critical challenge in banking. Big Data helps in managing vast records, ensuring transparency, and producing detailed reports that satisfy regulators. Automated compliance monitoring reduces manual work and lowers the chances of costly penalties.',
        },
        {
          title: 'Customer Insights and Predictive Analytics',
          description:
            'With predictive models, banks can anticipate customer needs—such as future loan requirements or investment interests. By analyzing customer journeys and transaction data, banks can proactively offer solutions before customers even request them.',
        },
        {
          title: 'Operational Efficiency',
          description:
            'Big Data streamlines internal processes by identifying bottlenecks, improving workforce productivity, and reducing operational costs. It enables banks to allocate resources effectively, optimize workflows, and enhance service delivery speed.',
        },
        {
          title: 'Enhanced Cybersecurity',
          description:
            'Cyber threats are one of the biggest concerns in banking. Big Data analytics strengthens cybersecurity by identifying anomalies, preventing breaches, and enhancing resilience against evolving digital threats.',
        },
        {
          title: 'Investment and Market Analysis',
          description:
            'Big Data helps banks analyze market trends, investment risks, and global financial patterns. This enables institutions to guide clients toward smarter investment opportunities and make well-informed financial decisions.',
        },
      ],
    },
    //Cybersecurity
    Cybersecurity: {
      heroImage: 'assets/Industries/bankingSubPages/cyber-security.jpg',
      heroHeading: 'Why Is Cybersecurity Essential for Modern Banking?',
      subHeading:
        'Safeguarding customer trust, financial assets, and digital operations in an evolving threat landscape.',
      introText:
        'Cybersecurity has become the backbone of modern banking, ensuring that sensitive financial data and customer transactions remain secure in an increasingly digital world. With the rise of online banking, mobile payments, and AI-driven services, banks are more exposed to cyber risks than ever before. Effective cybersecurity strategies not only prevent financial losses and data breaches but also build customer confidence and regulatory compliance. By leveraging advanced tools like AI-driven monitoring, encryption, and fraud prevention systems, banks can protect assets, mitigate risks, and deliver secure digital banking experiences.',
      points: [
        {
          title: 'Advanced Threat Detection and Prevention',
          description:
            'Banks deploy AI and machine learning systems to monitor millions of transactions in real time, spotting unusual patterns that may indicate hacking attempts, insider threats, or malware intrusions.',
        },
        {
          title: 'Data Encryption and Secure Transactions',
          description:
            'End-to-end encryption ensures that customer data, from account numbers to payment details, is transmitted securely. This prevents unauthorized access, protecting both customers and the bank.',
        },
        {
          title: 'Identity and Access Management (IAM)',
          description:
            'Cybersecurity frameworks control who can access sensitive systems. Multi-factor authentication (MFA), biometric logins, and role-based access ensure that only authorized individuals gain entry.',
        },
        {
          title: 'Regulatory Compliance and Auditing',
          description:
            'Banks must follow strict global and local cybersecurity regulations. Automated compliance tools ensure data protection policies are maintained, audits are passed smoothly, and hefty penalties are avoided.',
        },
        {
          title: 'Fraud Prevention and Anti-Money Laundering (AML)',
          description:
            'Cybersecurity systems analyze customer transaction histories to detect fraudulent activities, fake accounts, and money-laundering schemes. Real-time alerts help stop crimes before they escalate.',
        },
        {
          title: 'Cybersecurity Awareness and Employee Training',
          description:
            'Employees are often the weakest link in security. Regular training, phishing simulations, and awareness campaigns strengthen staff vigilance, reducing the risk of human error in cyberattacks.',
        },
        {
          title: 'Incident Response and Business Continuity',
          description:
            'Even with robust defenses, breaches may occur. A structured incident response plan ensures quick recovery, limits damage, and restores operations, protecting customer trust.',
        },
        {
          title: 'Cloud and Mobile Security',
          description:
            'With digital banking shifting to cloud platforms and mobile apps, cybersecurity measures focus on securing APIs, mobile transactions, and cloud infrastructures to deliver safe, seamless services.',
        },
      ],
    },
    //ProjectManagement
    ProjectManagement: {
      heroImage: 'assets/Industries/bankingSubPages/project-management.jpg',
      heroHeading: 'How Does Project Management Drive Success in Banking?',
      subHeading:
        'Ensuring efficiency, compliance, and customer value in financial transformation initiatives.',
      introText: '',
      points: [
        {
          title: 'Strategic Alignment of Projects',
          description:
            'Projects are aligned with business goals, ensuring every initiative—whether digital banking, compliance, or product innovation—adds measurable value to the organization.',
        },
        {
          title: 'Effective Resource Allocation',
          description:
            'Project managers optimize the use of people, budgets, and technology, ensuring resources are neither overused nor wasted while meeting tight banking deadlines.',
        },
        {
          title: 'Identity and Access Management (IAM)',
          description:
            'Cybersecurity frameworks control who can access sensitive systems. Multi-factor authentication (MFA), biometric logins, and role-based access ensure that only authorized individuals gain entry.',
        },
        {
          title: 'Regulatory and Compliance Management',
          description:
            'Banking projects often involve strict regulations. Project management ensures compliance requirements are integrated into project plans to avoid costly penalties.',
        },
        {
          title: 'Risk Identification and Mitigation',
          description:
            'Project managers anticipate potential risks like delays, cybersecurity threats, or vendor issues, and put mitigation strategies in place to protect project success.',
        },
        {
          title: 'Technology Integration and Upgrades',
          description:
            'From core banking systems to AI-driven tools, project management ensures smooth integration, minimal downtime, and enhanced performance across banking operations.',
        },
        {
          title: 'Stakeholder Communication and Collaboration',
          description:
            'Clear communication with stakeholders—including executives, regulators, and customers—keeps expectations aligned and ensures transparency throughout the project lifecycle.',
        },
        {
          title: 'Performance Tracking and KPIs',
          description:
            'Using measurable indicators like cost savings, customer adoption, and process efficiency, project managers track progress and demonstrate project value.',
        },
        {
          title: 'Continuous Improvement and Innovation',
          description:
            'Post-project reviews and feedback loops help banks refine processes, improve delivery, and encourage innovation for future projects.',
        },
      ],
    },
    //AI
    AI: {
      heroImage: 'assets/Industries/bankingSubPages/artificial-intelligence.jpg',
      heroHeading:
        'How Is Artificial Intelligence Transforming Modern Banking?',
      subHeading:
        'Leveraging AI to enhance customer experiences, streamline operations, and strengthen security in the financial sector.',
      introText: '',
      points: [
        {
          title: 'Personalized Customer Experience',
          description:
            'AI analyzes customer data to provide tailored financial advice, product recommendations, and spending insights, improving overall satisfaction and loyalty.',
        },
        {
          title: 'Fraud Detection and Prevention',
          description:
            'Advanced AI models monitor real-time transactions to identify suspicious activities, preventing fraudulent actions before they cause financial harm.',
        },
        {
          title: 'Intelligent Chatbots and Virtual Assistants',
          description:
            'AI-powered chatbots handle routine queries, loan requests, and account support, reducing wait times while ensuring customers get quick, accurate responses.',
        },
        {
          title: 'Credit Risk Assessment',
          description:
            'AI evaluates customer profiles and transaction histories to predict creditworthiness more accurately, improving loan approvals and reducing default risks.',
        },
        {
          title: 'Process Automation (RPA + AI)',
          description:
            'Repetitive processes like KYC verification, account opening, and compliance reporting are automated with AI-driven tools, cutting costs and increasing efficiency.',
        },
        {
          title: 'Predictive Analytics for Decision-Making',
          description:
            'Banks use AI to analyze historical data and predict future market trends, helping leaders make informed investment and policy decisions.',
        },
        {
          title: 'Cybersecurity and Threat Intelligence',
          description:
            'AI enhances security by detecting unusual login behaviors, malware patterns, and cyberattacks, ensuring robust protection for digital banking systems.',
        },
        {
          title: 'Cost Reduction and Operational Efficiency',
          description:
            'By automating tasks and reducing human error, AI lowers operational costs while maintaining accuracy and compliance across banking operations.',
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
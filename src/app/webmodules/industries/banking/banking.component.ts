import { Component } from '@angular/core';
import { IndustryUtilComponent } from '../../utilities/industry-util/industry-util.component';

@Component({
  selector: 'app-banking',
  imports: [IndustryUtilComponent],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss',
})
export class BankingComponent {
  public headerBg = 'assets/Industries/wave.svg';
  public itHeader = 'Banking';
  public itHeading =
    'SprintPark Successfully Navigating Change in Banking with Confidence';
  public itContent =
    'SprintPark helps banks embrace digital transformation and stay ahead of evolving regulations by providing efficient, compliant, and reliable financial service solutions that enhance operations and build customer trust';
  public subHeading = 'How We Help Financial Institutions Thrive';
  public telecom = 'assets/Industries/banking/banking-hero.png';
  public cards = [
    {
      img: 'assets/Industries/banking/big-data.png',
      title: 'Big Data',
      description:
        'We manage vast financial datasets for risk assessment, transaction monitoring, and customer insights enabling smarter decisions through predictive analytics.',
      link: '/banking/BigData',
    },
    {
      img: 'assets/Industries/banking/cyber-security.png',
      title: 'Cybersecurity',
      description:
        'We safeguard sensitive financial data with robust security measures, regular audits, and compliance with industry regulations to protect against cyber threats.',
      link: '/banking/Cybersecurity',
    },
    {
      title: 'Project Management',
      img: 'assets/Industries/banking/project-management.png',
      description:
        'We oversee critical initiatives such as digital banking transformations, regulatory compliance upgrades, and technology deployments ensuring projects are delivered on time and within scope.',
      link: '/banking/ProjectManagement',
    },
    {
      img: 'assets/Industries/banking/artificial-intelligence.png',
      title: ' Artificial Intelligence',
      description:
        'We deploy AI-powered tools for personalized banking, fraud detection, customer service chatbots, and predictive financial analytics to enhance user experience and operational efficiency.',
      link: '/banking/AI',
    },
  ];
}

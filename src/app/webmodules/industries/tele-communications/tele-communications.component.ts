import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IndustryUtilComponent } from '../../utilities/industry-util/industry-util.component';

@Component({
  selector: 'app-tele-communications',
  imports: [CommonModule, IndustryUtilComponent],
  templateUrl: './tele-communications.component.html',
  styleUrl: './tele-communications.component.scss',
})
export class TeleCommunicationsComponent {
  public headerBg = 'assets/Industries/wave.svg';
  public itHeader = 'Empowering Telecom Growth with Confidence';
  public itContent =
    'As the telecom industry rapidly expands across B2B and B2C markets, so do the challenges of compliance, risk, and trust. We help telecom businesses scale strategically, strengthen governance, and stay resilient in a constantly evolving landscape — empowering growth with clarity and confidence.';
  public subHeading = 'How We Empower Your Business';
  public telecom = 'assets/Industries/itAndTelecommunication/telecommunications-hero.png';
  public cards = [
    {
      img: 'assets/Industries/itAndTelecommunication/data-privacy.png',
      title: 'Data Privacy',
      description:
        'Protect your data using advanced risk assessments, encryption, and compliance tools to prevent breaches, leaks, and unauthorized access.',
      link: '/telecommunication/dataPrivacy',
    },
    {
      img: 'assets/Industries/itAndTelecommunication/automation.png',
      title: 'Automation',
      description:
        'Automate personalized communications across email, SMS, and social media to boost efficiency, engagement, and timely customer interactions.',
      link: '/telecommunication/automation',
    },
    {
      title: 'Infrastructure',
      img: 'assets/Industries/itAndTelecommunication/infrastructure.png',
      description:
        'Develop scalable infrastructure with robust storage, networking, and sharing capabilities to support your business growth and digital transformation.',
      link: '/telecommunication/infrastructure',
    },
    {
      img: 'assets/Industries/itAndTelecommunication/managed-solutions.png',
      title: ' Managed Solutions',
      description:
        'Get comprehensive IT and security management for reliable operations, reduced downtime, proactive monitoring, and improved system performance.',
      link: '/telecommunication/managedSolutions',
    },
  ];
}
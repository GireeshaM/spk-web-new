import { Component } from '@angular/core';
import { IndustryUtilComponent } from '../../utilities/industry-util/industry-util.component';

@Component({
  selector: 'app-govt',
  imports: [IndustryUtilComponent],
  templateUrl: './govt.component.html',
  styleUrl: './govt.component.scss',
})
export class GovtComponent {
  public headerBg = 'assets/Industries/wave.svg';
  public itHeader = 'Government';
  public itHeading = 'Empowering Governments with Purpose-Built Solutions';
  public itContent =
    'Governments face complex challenges—from data protection to talent gaps and crisis management. SprintPark delivers tailored, expert-driven solutions that foster innovation, efficiency, and trust—never a one-size-fits-all approach.';
  public subHeading = 'Shaping the Future of Public Service';
  public telecom = 'assets/Industries/government/government-hero.jpg';
  public cards = [
    {
      img: 'assets/Industries/government/strategic-risk.png',
      title: 'Strategic Risk & Cyber Resilience',
      description:
        'We help safeguard public trust by identifying risks, enforcing cybersecurity defenses, and reducing threats like data breaches and fraud.',
      link: '/government/StrategicRiskAndResilence',
    },
    {
      img: 'assets/Industries/government/smart-it-managed-solutions.png',
      title: 'Smart IT & Managed Solutions',
      description:
        'Modernize public services with integrated IT consulting and managed solutions that streamline workflows, improve systems, and boost collaboration.',
      link: '/government/SmartItManagedsolutions',
    },
    {
      img: 'assets/Industries/government/project-management-excellence.png',
      title: 'Project Management Excellence',
      description:
        'Ensure policy and development goals are met efficiently through tailored project management that maximizes limited public resources.',
      link: '/government/ProjectManagementExcellence',
    },
    {
      img: 'assets/Industries/government/actionable-data-analytics.png',
      title: ' Actionable Data Analytics',
      description:
        'Empower decision-makers with real-time insights, improve service delivery, and increase transparency through secure, ethical use of public data.',
      link: '/government/DataAnalytics',
    },
    {
      img: 'assets/Industries/government/trusted-transformation-partner.png',
      title: ' Trusted Transformation Partner',
      description:
        'From digital upgrades to crisis resilience, SprintPark delivers expertise, structure, and support to help governments adapt and thrive.',
      link: '/government/TrustedTransformationPartner',
    },
    {
      img: 'assets/Industries/government/citizen-engagement.png',
      title: ' Citizen Engagement & Transparency',
      description:
        'Enhance public trust by improving communication channels, promoting transparency, and enabling citizen-centric services through innovative technology solutions.',
      link: '/government/CitizenEngagementTransparency',
    },
  ];
}

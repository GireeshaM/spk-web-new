import { Component } from '@angular/core';
import { IndustrySubUtilComponent } from '../../utilities/industry-sub-util/industry-sub-util.component';

@Component({
  selector: 'app-telecommunication',
  imports: [IndustrySubUtilComponent],
  templateUrl: './telecommunication.component.html',
  styleUrl: './telecommunication.component.scss',
})
export class TelecommunicationComponent {
  currentSection = 'dataPrivacy';
  dataPrivacy = {
    heroImage: '/assets/industries/healthcareIndustry.png',
    heroHeading: 'Why Data Privacy is Telecom’s Biggest Challenge',
    subHeading: 'Customer trust begins with secure communication.',
    introText:
      'Telecom networks connect people, businesses, and governments every second. With this connectivity comes the responsibility of handling huge volumes of personal data from call logs to browsing activity. Cybercriminals see this data as gold, and a single breach can affect millions of users at once. The challenge for telecom providers is not just offering high-speed services but also protecting every piece of information that flows through their systems. Building stronger encryption, monitoring threats in real time, and educating users are now critical for protecting digital trust.',
    healthcarePoints: [
      {
        title:
          'From Calls to Clouds Safeguarding User Data in Telecommunications',
        description:
          'Telecom companies have moved far beyond voice calls. Today, they manage cloud services, digital payments, and video streaming — all of which depend on sensitive customer information. As the industry expands, hackers are finding new ways to exploit weak points in networks. Protecting user data requires more than firewalls; it demands AI-driven monitoring, transparent data policies, and strict internal controls. When companies treat privacy as a priority instead of an afterthought, they create safer digital spaces for their customers.',
      },
      {
        title: 'The Future of Privacy in a 5G World',
        description:
          '5G technology promises ultra-fast internet and near-instant communication, powering innovations like autonomous vehicles and smart cities. However, the same speed and scale that make 5G exciting also make it vulnerable. Every connected device becomes a possible entry point for cyberattacks. To secure this new digital era, telecom providers must design networks with privacy at the core — from end-to-end encryption to advanced intrusion detection systems. Privacy protection in 5G is not optional; it’s the foundation for a trustworthy network.',
      },
      {
        title: ' Data Privacy in IT Services Beyond Just Compliance',
        description:
          'Many IT companies focus on compliance with laws such as GDPR or HIPAA, but meeting regulations is only the first step. True data privacy means creating systems that protect people, not just paperwork. This involves secure software development, encryption of sensitive data, regular audits, and employee awareness programs. When businesses see privacy as a culture instead of a checkbox, they not only prevent breaches but also build stronger relationships with their clients and customers.',
      },
      {
        title: 'IoT and Data Privacy Every Device is a Gateway',
        description:
          'From wearable health trackers to connected cars, IoT devices generate massive amounts of personal data every second. Each device, if left unsecured, can act as a backdoor for hackers. In telecom and IT environments, where billions of devices share information simultaneously, the risk multiplies. Strong authentication, secure coding, and timely updates are essential to prevent misuse. As IoT continues to grow, protecting data privacy will be the key to ensuring users can trust the smart devices around them.',
      },
    ],
  };

  automation = {
    heroImage: '/assets/industries/automation.png',
    heroHeading:
      'How can automation reshape patient care and medical innovation?',
    subHeading: 'Intelligent Automation in Healthcare & Life Sciences',
    introText: 'Intelligent automation is revolutionizing healthcare...',
    points: [
      {
        title: 'Streamlining Administrative Workflows',
        description: 'Automation reduces tasks such as patient registration...',
      },
      {
        title: 'Accelerating Diagnostics with AI',
        description:
          'Automation enhances diagnostic accuracy by recognizing patterns...',
      },
    ],
  };
}

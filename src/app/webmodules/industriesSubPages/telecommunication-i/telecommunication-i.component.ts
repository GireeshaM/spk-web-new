import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustrySubUtilComponent } from '../../utilities/industry-sub-util/industry-sub-util.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-telecommunication-i',
  imports: [IndustrySubUtilComponent, CommonModule],
  templateUrl: './telecommunication-i.component.html',
  styleUrl: './telecommunication-i.component.scss'
})
export class TelecommunicationIComponent {
  public currentSection = 'dataPrivacy';
  route = inject(ActivatedRoute);
  public sections = {
    dataPrivacy: {
      heroImage: '/assets/industries/healthcareIndustry.png',
      heroHeading: 'Why Data Privacy is Telecom’s Biggest Challenge',
      subHeading: 'Customer trust begins with secure communication.',
      introText:
        'Telecom networks connect people, businesses, and governments every second. With this connectivity comes the responsibility of handling huge volumes of personal data from call logs to browsing activity. Cybercriminals see this data as gold, and a single breach can affect millions of users at once. The challenge for telecom providers is not just offering high-speed services but also protecting every piece of information that flows through their systems. Building stronger encryption, monitoring threats in real time, and educating users are now critical for protecting digital trust.',
      points: [
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
    },
    automation: {
      heroImage: '/assets/industries/automation.png',
      heroHeading:
        'How can automation reshape patient care and medical innovation?',
      subHeading: 'Intelligent Automation in Healthcare & Life Sciences',
      introText: '',
      points: [
        {
          title: ' Automation in Action Transforming Communication at Scale',
          description:
            'Automation in communication allows businesses to handle repetitive tasks such as sending emails, reminders, and alerts without human intervention. Instead of manually sending thousands of updates, automated systems ensure that the right message reaches the right person at the right time. For IT and telecom companies, this means faster engagement, fewer errors, and higher efficiency. By adopting automation, organizations can serve customers better while saving valuable time and resources.',
        },
        {
          title: 'The Future of Telecom Powered by Automation',
          description:
            'Telecom companies deal with millions of customer requests every day — from billing notifications to service upgrades. Automation helps manage this scale by responding instantly to routine queries, sending timely updates, and even predicting customer needs. This reduces the burden on support teams and allows them to focus on solving complex issues. With automation, telecom providers not only cut costs but also deliver faster, more reliable services that customers can trust.',
        },
        {
          title:
            '  Seamless Engagement Through Automated Communicationin AcAutomationtion Transforming Communication at Scale',
          description:
            'Automation iIn today’s digital world, customers expect quick and accurate responses. Automation ensures they don’t have to wait. Whether it’s a service confirmation, outage alert, or follow-up message, automated tools provide real-time communication across channels like SMS, email, and chat. For IT and telecom businesses, this creates consistent experiences that build long-term trust and loyalty. When communication is seamless, customer satisfaction naturally rises.n communication allows businesses to handle repetitive tasks such as sending emails, reminders, and alerts without human intervention. Instead of manually sending thousands of updates, automated systems ensure that the right message reaches the right person at the right time. For IT and telecom companies, this means faster engagement, fewer errors, and higher efficiency. By adopting automation, organizations can serve customers better while saving valuable time and resources.',
        },
        {
          title:
            'The Automation in IT Services Beyond Saving Time of Telecom Powered by Automation',
          description:
            'For IT companies, automation is more than efficiency — it’s about building reliable systems. Automated notifications, status updates, and ticket handling ensure that both employees and customers stay informed at all times. This minimizes downtime, reduces manual errors, and creates a smoother workflow. By adopting automation, IT services can deliver high-quality support while focusing their teams on innovation and problem-solving. companies deal with millions of customer requests every day — from billing notifications to service upgrades. Automation helps manage this scale by responding instantly to routine queries, sending timely updates, and even predicting customer needs. This reduces the burden on support teams and allows them to focus on solving complex issues. With automation, telecom providers not only cut costs but also deliver faster, more reliable services that customers can trust.',
        },
        {
          title:
            'The Balance Human Touch and Automation Together Automation in IT Services Beyond Saving Time of Telecom Powered by Automation',
          description:
            'For IT companies, Automation is powerful, but it cannot replace human empathy. The best customer experiences happen when automated tools handle repetitive tasks while humans focus on complex or sensitive issues. In telecom and IT, this balance ensures customers enjoy both instant updates and meaningful personal support. Rather than replacing people, automation works best when it enhances human connection, making service both fast and thoughtful. is more than efficiency — it’s about building reliable systems. Automated notifications, status updates, and ticket handling ensure that both employees and customers stay informed at all times. This minimizes downtime, reduces manual errors, and creates a smoother workflow. By adopting automation, IT services can deliver high-quality support while focusing their teams on innovation and problem-solving. companies deal with millions of customer requests every day — from billing notifications to service upgrades. Automation helps manage this scale by responding instantly to routine queries, sending timely updates, and even predicting customer needs. This reduces the burden on support teams and allows them to focus on solving complex issues. With automation, telecom providers not only cut costs but also deliver faster, more reliable services that customers can trust.',
        },
      ],
    },
    infrastructure: {
      heroImage: '/assets/industries/infrastructure.png',
      heroHeading:
        'What Makes Strong Infrastructure the Backbone of IT and Telecom?',
      subHeading:
        ' Understanding why reliable systems keep businesses connected.',
      introText: '',
      points: [
        {
          title:
            'Networking and Communication Services The Core of Digital Growth',
          description:
            'Communication services and networking systems are the lifelines of today’s connected businesses. From video calls to real-time data exchange, every activity depends on fast and secure connections. As organizations expand, the need for scalable and secure networking grows. Investing in advanced communication solutions ensures that teams and customers stay connected, no matter where they are.',
        },
        {
          title: 'Why Cloud Infrastructure is Transforming IT',
          description:
            'Cloud infrastructure is no longer optional — it’s essential. Businesses can scale resources instantly, reduce hardware costs, and support remote work without relying on heavy physical systems. This flexibility allows organizations to innovate faster and reach global markets with minimal barriers. Secure and agile cloud solutions are now the backbone of digital transformation.',
        },
        {
          title: 'Data Centers: Silent Powerhouses of the Digital Era',
          description:
            'Every app, website, or online service relies on data centers. These facilities manage huge amounts of information, keeping it available and secure at all times. Modern data centers must balance performance with sustainability, ensuring energy efficiency while delivering lightning-fast access. As the demand for digital services grows, data centers will continue to be the driving force behind innovation.',
        },
        {
          title: 'How Infrastructure Shapes the Future of Automation and AI',
          description:
            'Smart technologies like AI and automation thrive only on strong infrastructure. They need fast data processing, reliable connectivity, and secure storage to work effectively. Without these elements, innovation slows down and opportunities are lost. By strengthening infrastructure today, businesses prepare themselves for the intelligent solutions of tomorrow.',
        },
        {
          title: 'The Shift from Legacy Systems to Modern Infrastructure',
          description:
            'Outdated infrastructure creates roadblocks for businesses. Legacy systems are slower, harder to maintain, and more vulnerable to security risks. In contrast, modern infrastructure offers flexibility, cost savings, and resilience. Companies that transition early gain an edge, while those who delay risk falling behind in a fast-changing market.',
        },
        {
          title: 'Smart Infrastructure for a Smarter Future',
          description:
            'Infrastructure today is designed not just to support but to anticipate business needs. Smart infrastructure uses automation, AI monitoring, and predictive analytics to reduce downtime and enhance security. With these advancements, businesses can scale confidently, adapt quickly, and provide better experiences for users worldwide.',
        },
      ],
    },
    managedSolutions: {
      heroImage: '/assets/industries/managed-solutions.png',
      heroHeading: 'Why Choose Managed Solutions for Your Business?',
      subHeading: 'Unlock productivity with dependable IT services.',
      introText: '',
      points: [
        {
          title: 'Managed Solutions That Keep Your Technology Running Smoothly',
          description:
            'Managed Solutions remove the hassle of running complex IT systems. From servers and storage to devices and security, SprintPark takes care of it all. Our proactive approach ensures smooth operations, fewer risks, and long-term stability so your team can stay focused on business growth.',
        },
        {
          title: 'Managed Solutions That Drive Everyday Business',
          description:
            'Every business relies on technology, and Managed Solutions make sure it works flawlessly. SprintPark manages servers, mobile devices, printers, and cybersecurity with continuous monitoring and quick support. The result is better performance, less downtime, and peace of mind for your business.',
        },
        {
          title: 'How Managed Solutions Tackle IT Complexity',
          description:
            'IT infrastructure can often be overwhelming. With SprintPark’s Managed Solutions, businesses get expert support for servers, storage, and networks, backed by strong data security. We simplify your IT operations, reduce unexpected issues, and help you scale confidently in today’s fast-changing digital space.',
        },
        {
          title: 'Complete IT Care With Managed Solutions',
          description:
            'SprintPark delivers all-in-one IT support by managing servers, devices, printers, storage, and security in one place. Our 24/7 monitoring and responsive service ensure your systems remain efficient, protected, and ready to grow alongside your business.',
        },
        {
          title: 'Managed Solutions for a Stronger Tomorrow',
          description:
            'In a digital-first world, security and dependability matter most. SprintPark’s Managed Solutions provide both, ensuring your devices, servers, and networks are always optimized and protected. With our expertise, your business gains the resilience and flexibility needed to thrive in the future.',
        },
        {
          title: 'Managed IT That Works as Hard as You Do',
          description:
            'SprintPark provides seamless IT management tailored to your pace of growth. Whether it’s handling servers, devices, or security, our Managed Solutions keep your technology strong and dependable, so you can focus on success.',
        },
        {
          title: 'Managing IT Empowering Business',
          description:
            'Your IT should drive growth, not slow it down. SprintPark’s Managed Solutions handle complex tasks like data storage, cybersecurity, and device management, freeing your team to innovate and move faster.',
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

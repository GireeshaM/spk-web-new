import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IndustryUtilComponent } from '../../utilities/industry-util/industry-util.component';

@Component({
  selector: 'app-tele-communications',
  imports: [CommonModule,IndustryUtilComponent],
  templateUrl: './tele-communications.component.html',
  styleUrl: './tele-communications.component.scss'
})
export class TeleCommunicationsComponent {
headerBg='assets/Industries/wave.svg';
itHeader='Empowering Telecom Growth with Confidence';
 itContent="As the telecom industry rapidly expands across B2B and B2C markets, so do the challenges of compliance, risk, and trust. We help telecom businesses scale strategically, strengthen governance, and stay resilient in a constantly evolving landscape — empowering growth with clarity and confidence.";
 subHeading='How We Empower Your Business';
 telecom="assets/Industries/TelecomIndustries.png";
 cards=[
  {
    img:'assets/Industries/DataPrivacy.png',
    title:'Data Privacy',
    description:'Protect your data using advanced risk assessments, encryption, and compliance tools to prevent breaches, leaks, and unauthorized access.',
    link:'/#'
  },
  {
    img:'assets/Industries/Automation.png',
    title:'Automation',
    description:'Automate personalized communications across email, SMS, and social media to boost efficiency, engagement, and timely customer interactions.',
    link:'/#'
  },
   {
    title:'Infrastructure',
    img:'assets/Industries/Infrastructure.png',
    description:'Develop scalable infrastructure with robust storage, networking, and sharing capabilities to support your business growth and digital transformation.',
    link:'/#'
  },
   {
    img:'assets/Industries/ManagedSolutions.png',
    title:' Managed Solutions',
    description:'Get comprehensive IT and security management for reliable operations, reduced downtime, proactive monitoring, and improved system performance.',
    link:'/#'
  },
  
 ]
}

  
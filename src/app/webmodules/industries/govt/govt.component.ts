import { Component } from '@angular/core';
import { IndustryUtilComponent } from '../../utilities/industry-util/industry-util.component';

@Component({
  selector: 'app-govt',
  imports: [IndustryUtilComponent],
  templateUrl: './govt.component.html',
  styleUrl: './govt.component.scss'
})
export class GovtComponent {
public headerBg='assets/Industries/wave.svg';
public itHeader='Empowering Governments with Purpose-Built Solutions';
 public itContent="Governments face complex challenges—from data protection to talent gaps and crisis management. SprintPark delivers tailored, expert-driven solutions that foster innovation, efficiency, and trust—never a one-size-fits-all approach.";
 public subHeading='Shaping the Future of Public Service';
  public  telecom="assets/Industries/TelecomIndustries.png";
  public  cards=[
  {
    img:'assets/Industries/DataPrivacy.png',
    title:'Strategic Risk & Cyber Resilience',
    description:'We help safeguard public trust by identifying risks, enforcing cybersecurity defenses, and reducing threats like data breaches and fraud.',
    link:'/#'
  },
  {
    img:'assets/Industries/Automation.png',
    title:'Smart IT & Managed Solutions',
     description:'Modernize public services with integrated IT consulting and managed solutions that streamline workflows, improve systems, and boost collaboration.',
    link:'/#'
  },
   {
    title:'Project Management Excellence',
    img:'assets/Industries/Infrastructure.png',
     description:'Ensure policy and development goals are met efficiently through tailored project management that maximizes limited public resources.',
    link:'/#'
  },
   {
    img:'assets/Industries/ManagedSolutions.png',
    title:' Actionable Data Analytics',
     description:'Empower decision-makers with real-time insights, improve service delivery, and increase transparency through secure, ethical use of public data.',
    link:'/#'
  },
   {
    img:'assets/Industries/ManagedSolutions.png',
    title:' Trusted Transformation Partner',
     description:'From digital upgrades to crisis resilience, SprintPark delivers expertise, structure, and support to help governments adapt and thrive.',
    link:'/#'
  },
   {
    img:'assets/Industries/ManagedSolutions.png',
    title:' Citizen Engagement & Transparency',
     description:'Enhance public trust by improving communication channels, promoting transparency, and enabling citizen-centric services through innovative technology solutions.',
    link:'/#'
  },
  
 ]
}

  

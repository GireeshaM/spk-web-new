import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustrySubUtilComponent } from '../../utilities/industry-sub-util/industry-sub-util.component';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { MapSectionComponent } from '../../utilities/map-section/map-section.component';
import { SubCardsComponent } from '../../utilities/sub-cards/sub-cards.component';



interface Step {
  title: string;
  description: string;
  icon?: string;
}

interface Section {
  heroImage: string;
  heroHeading: string;
  smallHeading: string;
  whyList: Array<{ title: string; description: string }>;
  steps?: Step[];
  text?: string;
}

// ✅ Common reusable steps
const COMMON_STEPS: Step[] = [
    {
    title: 'Understand',
    icon: 'assets/Industries/understand.svg',
    description: 'We learn about your business challenges, goals and ambitions, strategic drivers and culture.'
  },
  {
    title: 'Assess',
    icon: 'assets/Industries/access.svg',
    description: 'We assess your current risk position relative to your needs and goals, and develop a roadmap for optimizing your cybersecurity.'
  },
  {
    title: 'Design',
    icon: 'assets/Industries/design.svg',
    description: 'We design solutions, processes and strategies that allow you to achieve the desired state of security and effectiveness.'
  },
  {
    title: 'Implement',
    icon: 'assets/Industries/implement.svg',
    description: 'We draw on our experience and expertise to implement the agreed technical solutions, governance, compliance frameworks and migration processes.'
  },
  {
    title: 'Manage and Optimize',
    icon: 'assets/Industries/manage-and-optimize.svg',
    description: 'We operate to deliver tangible, value-added cyber security on a 24/7 basis. We use our methodology to evolve and optimize your solution over time, to maximize value.'
  }
];

@Component({
  selector: 'app-government-i',
  imports: [IndustrySubUtilComponent, CommonModule,MapSectionComponent,SubCardsComponent],
  templateUrl: './government-i.component.html',
  styleUrl: './government-i.component.scss'
})
export class GovernmentIComponent implements OnInit{
 public currentSection = 'StrategicRiskAndResilence';

  private route = inject(ActivatedRoute);
 sections: Record<string, Section> = {
    //  StrategicRiskAndResilence
    StrategicRiskAndResilence: {
      heroImage: 'assets/Industries/governmentSubPages/risk-management.jpg',
      heroHeading: 'How Can Risk Management Safeguard Public Trust?',
      smallHeading:
        ' Identifying, assessing, and mitigating risks to ensure stability and reliable services.',
     text: 'Our Working Strategy',
       whyList: [
    {
      title: 'Protecting Resources & Trust',
      description:
        'Risk management identifies, assesses, and mitigates threats early, ensuring resource protection, service continuity, organizational resilience, and public confidence.',
    },
    {
      title: 'Strengthening Public Sector Resilience',
      description:
        'Systematic risk management reduces uncertainties, secures resources, and ensures uninterrupted services, enabling informed decisions and reliable governance for citizens.',
    },
    {
      title: 'Smarter Governance & Stability',
      description:
        'By addressing financial, operational, and security risks, risk management ensures accountability, minimizes disruptions, and strengthens long-term stability in governance.',
    },
    {
      title: 'Safeguarding the Future',
      description:
        'Evaluating threats and preparing responses, risk management guarantees operational stability, efficient resource use, and sustained trust in public services.',
    },
  ],
      steps: COMMON_STEPS,
    },

    // SmartItManagedsolutions
    SmartItManagedsolutions: {
      heroImage: 'assets/Industries/governmentSubPages/smart-it-managed-solutions.jpg',
      heroHeading: 'How Can IT Consulting Transform Government Operations?',
      smallHeading:
'Enhancing Collaboration and Efficiency in Public Sector Agencies',    
  text: 'Our Working Strategy',
     whyList: [
  {
    title: 'Streamlined Implementation & Resource Efficiency',
    description:
      'Project management ensures smooth rollout of new curricula, technologies, and reforms. With efficient resource allocation, limited budgets, staff, and tools are used optimally to maximize impact.',
  },
  {
    title: 'Technology & Infrastructure Projects',
    description:
      'From LMS platforms to smart classrooms and campus infrastructure, project management guarantees well-planned execution, timely delivery, proper training, and adherence to safety and academic goals.',
  },
  {
    title: 'Collaboration & Risk Management',
    description:
      'By fostering communication among teachers, administrators, parents, and policymakers, project management ensures alignment. Risks like funding cuts or technical issues are identified early and mitigated.',
  },
  {
    title: 'Monitoring Outcomes & Student Success',
    description:
      'With measurable goals and continuous evaluation, institutions track progress and improve. Student-centered initiatives—like digital literacy or career development—deliver long-term educational value.',
  },
],

      steps: COMMON_STEPS,
    },

    // ProjectManagementExcellence:
    ProjectManagementExcellence: {
      heroImage: 'assets/Industries/governmentSubPages/project-management-excellence.jpg',
      heroHeading: ' How Does Project Management Drive Development?',
      smallHeading:
        'Turning plans into impactful results',
      text: 'Our Working Strategy',
     whyList: [
    {
      title: 'Streamlined Public Programs',
      description:
        'Project management reduces delays, improves transparency, and ensures public programs deliver real value efficiently to citizens.',
    },
    {
      title: 'Connecting Policy to Action',
      description:
        'It translates policies into actionable plans, tracks progress, manages risks, and optimizes resources for effective implementation.',
    },
    {
      title: 'Enhancing Governance & Efficiency',
      description:
        'Structured methodologies improve service delivery, ensure timely project completion, strengthen governance, and build public trust through measurable outcomes.',
    },
    {
      title: 'Sustainable Development & Empowerment',
      description:
        'Project management supports lasting growth, efficient oversight, better decision-making, accountability, and maximizes resource utilization for sustainable development.',
    },
  ],
  steps: COMMON_STEPS,
},
     // DataAnalytics:
    DataAnalytics:{
      heroImage: 'assets/Industries/governmentSubPages/favicon.png',
      heroHeading: 'How Can Data Analytics Transform Public Services?',
      smallHeading:
        'Unlocking insights to drive smarter governance and citizen trust.',
      text: 'Our Working Strategy',
     whyList: [
  {
    title: 'Personalized Learning & Student Success',
    description:
      'Data analytics allows educators to create personalized learning paths. By tracking progress and behavior, institutions can predict risks early and support students before they fall behind.',
  },
  {
    title: 'Smarter Curriculum & Decision-Making',
    description:
      'Analytics helps measure curriculum effectiveness and ensures courses stay relevant. Leaders also use insights for accurate admissions planning, faculty hiring, and policy decisions.',
  },
  {
    title: 'Resource & Accountability Optimization',
    description:
      'With real-time data, institutions can optimize the use of budgets, facilities, and technology. Transparent reporting builds trust among students, parents, and regulators.',
  },
  {
    title: 'Research, Engagement & Innovation',
    description:
      'Data-driven insights support impactful research and innovation in teaching. Monitoring student participation improves engagement, boosts retention, and reduces dropouts.',
  },
],

      steps: COMMON_STEPS,
    },
    TrustedTransformationPartner: { 
  heroImage: 'assets/Industries/governmentSubPages/trusted-transformation-partner.jpg',
  heroHeading: 'How Can a Trusted Transformation Partner Drive Your Growth?',
  smallHeading:
    'Building long-term success with expertise, innovation, and reliability.',
  text: 'Our Working Strategy',
  whyList: [
    {
      title: 'Strategic Guidance',
      description:
        'A trusted partner aligns transformation initiatives with goals, analyzes challenges, and designs roadmaps that drive growth, adaptability, and long-term success.',
    },
    {
      title: 'Industry Expertise',
      description:
        'Deep knowledge across sectors like healthcare, finance, and retail ensures solutions are compliant, relevant, and impactful in real-world business scenarios.',
    },
    {
      title: 'Technology & Innovation',
      description:
        'Partners leverage AI, cloud, IoT, and analytics to modernize systems, deliver innovative solutions, and keep organizations ahead in digital transformation.',
    },
    {
      title: 'Reliability & Change Support',
      description:
        'Reliable partners deliver outcomes, manage transitions, guide employees through change, and ensure smooth, accountable, and sustainable transformation for long-term growth.',
    },
  ],
  steps: COMMON_STEPS,
},

CitizenEngagement: { 
  heroImage: 'assets/Industries/governmentSubPages/citizen-engagement-transparency.jpg',
  heroHeading: 'How Can Governments Build Stronger Citizen Engagement and Transparency?',
  smallHeading:
    ' Empowering Citizens Through Open Communication and Trust.',
  text: 'Our Working Strategy',
  whyList: [
    {
      title: 'Open Data & Accountability',
      description:
        'Accessible public data enables citizens to track budgets, projects, and outcomes, fostering accountability, reducing corruption, and informed decision-making.',
    },
    {
      title: 'Digital Participation',
      description:
        'Online portals, mobile apps, and e-governance platforms empower citizens to provide feedback, influence policies, and engage directly in governance.',
    },
    {
      title: 'Two-Way Communication & Services',
      description:
        'Surveys, chatbots, and forums create feedback loops. Citizen-centric service portals enhance transparency, reduce delays, and build government trust.',
    },
    {
      title: 'Technology-Driven Transparency',
      description:
        'Blockchain, AI, and IoT ensure secure, fair, and efficient processes in voting, welfare, and procurement, strengthening public confidence.',
    },
  ],
  steps: COMMON_STEPS,
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
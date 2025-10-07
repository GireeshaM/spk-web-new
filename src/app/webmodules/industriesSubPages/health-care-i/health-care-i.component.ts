import { Component, inject, OnInit } from '@angular/core';
import { IndustrySubUtilComponent } from '../../utilities/industry-sub-util/industry-sub-util.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';






interface Section {
  heroImage: string;
  whyheader:string;
  smallHeading: string;
  whyList: Array<{ title: string; description: string }>;
  steps: Array<{ title: string; description: string; icon?: string }>;
  text?: string;
}

// ✅ Common reusable steps
const commonSteps = [
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
const sectionsData: Record<string, Section> = {
  intelligentinnovation: {
    heroImage: 'assets/Industries/healthCare-Life-Science-SubPage/intelligent-automation.jpg',
    whyheader: 'How can automation reshape patient care and medical innovation?',
    smallHeading: 'Intelligent Automation in Healthcare & Life Sciences',
    text: 'Our Working Strategy',
    whyList: [
      {
        title: 'Streamlined Healthcare Operations',
        description:
          'Intelligent automation digitizes administrative tasks, clinical workflows, and patient communication, reducing errors, costs, and delays while improving operational efficiency and care delivery.',
      },
      {
        title: 'Enhanced Diagnostics & Monitoring',
        description:
          'AI and IoT-enabled devices accelerate diagnostics, detect anomalies early, and provide real-time patient monitoring for proactive, safe, and personalized treatment.',
      },
      {
        title: 'Personalized Medicine & Clinical Trials',
        description:
          'Automation enables precision treatment plans and streamlines clinical trials, reducing errors, accelerating approvals, and ensuring tailored, effective healthcare solutions.',
      },
      {
        title: 'Efficiency, Safety & Engagement',
        description:
          'Automated systems improve patient communication, reduce human errors, optimize resources, and scale healthcare delivery while maintaining quality, trust, and satisfaction.',
      },
    ],
    steps: commonSteps,
  },

  connectedInfrastructure: {
    heroImage: 'assets/Industries/healthCare-Life-Science-SubPage/connected-infrastructure.jpg',
   whyheader: 'How Does Connected Infrastructure Transform Healthcare?',
    smallHeading: 'Building smarter systems for efficient, secure, and patient-centered care.',
    text: 'Our Transformation Model',
    whyList: [
      {
        title: 'Streamlined Healthcare Operations',
        description:
          'Intelligent automation digitizes administrative tasks, clinical workflows, and patient communication, reducing errors, costs, and delays while improving operational efficiency and care delivery.',
      },
      {
        title: 'Enhanced Diagnostics & Monitoring',
        description:
          'AI and IoT-enabled devices accelerate diagnostics, detect anomalies early, and provide real-time patient monitoring for proactive, safe, and personalized treatment.',
      },
      {
        title: 'Personalized Medicine & Clinical Trials',
        description:
          'Automation enables precision treatment plans and streamlines clinical trials, reducing errors, accelerating approvals, and ensuring tailored, effective healthcare solutions.',
      },
      {
        title: 'Efficiency, Safety & Engagement',
        description:
          'Automated systems improve patient communication, reduce human errors, optimize resources, and scale healthcare delivery while maintaining quality, trust, and satisfaction.',
      },
    ],
    steps: commonSteps,
  },

 
 dataSecurity:
 {
    heroImage: 'assets/Industries/healthCare-Life-Science-SubPage/data-Security.jpg',
    whyheader: 'Why Is Data Security & Compliance Critical in Healthcare?',
    smallHeading: 'Protecting sensitive health information while ensuring trust and regulatory alignment.',
    text: 'Our Working Strategy',
    whyList: [
      {
        title: 'Safeguarding Patient Privacy',
        description:
          'Strong encryption, secure access controls, and anonymization protect patient records, ensuring confidentiality, preventing misuse, and building trust between providers and citizens.',
      },
      {
        title: 'Compliance & Breach Prevention',
        description:
          'Adhering to HIPAA, GDPR, and local laws with firewalls, intrusion detection, and AI monitoring prevents breaches and ensures regulatory compliance.',
      },
      {
        title: 'Trust & Secure Data Sharing',
        description:
          'Secure APIs, encrypted transfers, and role-based access enable safe information exchange, while audits and training reduce insider risks, strengthening patient confidence.',
      },
      {
        title: 'Continuity & Future-Ready Security',
        description:
          'Backup systems, disaster recovery, and AI-powered adaptive frameworks maintain business continuity, protecting data against evolving cyber threats and emerging risks.',
      },
    ],
    steps: commonSteps,
  },

  projectDelivery: {
    heroImage: 'assets/Industries/healthCare-Life-Science-SubPage/healthCare-project-delivery.jpg',
    whyheader: 'How Can Effective Project Delivery Transform Healthcare Services?',
    smallHeading:
      'Achieving efficiency, innovation, and better patient outcomes through structured project execution.',
    text: 'Our Delivery Framework',
    whyList: [
      {
        title: 'Strategic Project Alignment',
        description:
          'Projects aligned with healthcare priorities improve patient safety, accessibility, and outcomes while maximizing investment value and organizational impact.',
      },
      {
        title: 'Patient-Centered Care & Collaboration',
        description:
          'Healthcare projects enhance patient experiences through modern systems. Structured delivery fosters teamwork among doctors, nurses, IT, and administrators.',
      },
      {
        title: 'Resource Optimization & Compliance',
        description:
          'Effective project execution ensures wise use of budgets, staff, and equipment while meeting strict legal, regulatory, and safety standards.',
      },
      {
        title: 'Innovation, Risk Management & Growth',
        description:
          'Strong project delivery supports digital innovations, anticipates risks, ensures continuity, tracks outcomes, and drives continuous improvement in healthcare services.',
      },
    ],
    steps: commonSteps,
  },

   talentSolutions: {
    heroImage: 'assets/Industries/healthCare-Life-Science-SubPage/expert-talent-solution.jpg',
    whyheader: 'How Can Expert Talent Solutions Empower the Healthcare Sector?',
    smallHeading: 'Building stronger healthcare systems with skilled professionals and specialized expertise.',
    text: 'Our Talent Strategy',
    whyList: [
      {
        title: 'Bridging Skill Gaps',
        description:
          'Expert talent solutions fill shortages in nursing, digital health, and clinical research, ensuring hospitals and clinics deliver quality, reliable care.',
      },
      {
        title: 'Workforce Flexibility & Leadership',
        description:
          'Flexible staffing models and leadership development allow healthcare organizations to scale teams, drive innovation, and navigate evolving patient and industry needs.',
      },
      {
        title: 'Driving Digital Transformation',
        description:
          'Skilled IT, AI, and data professionals implement digital health tools, electronic records, and predictive analytics, accelerating healthcare technology adoption.',
      },
      {
        title: 'Enhancing Care & Sustainability',
        description:
          'Proper talent placement improves patient care, ensures compliance, reduces burnout, and promotes long-term workforce retention, upskilling, and organizational resilience.',
      },
    ],
    steps: commonSteps,
  },

   patientInnovation: {
    heroImage: 'assets/Industries/healthCare-Life-Science-SubPage/patient-centered-innovations.jpg',
    whyheader: 'How Can Patient-Centered Innovation Transform Healthcare?',
    smallHeading: 'Empowering patients through personalized care, technology, and human-centered design.',
    text: 'Our Innovation Approach',
    whyList: [
      {
        title: 'Personalized Treatment Plans',
        description:
          'Data, genomics, and analytics enable tailored care strategies, improving treatment effectiveness, patient outcomes, and individualized healthcare experiences.',
      },
      {
        title: 'Digital Engagement & Telehealth',
        description:
          'Mobile apps, wearables, and remote consultations empower patients, expand access, reduce travel barriers, and enhance engagement in healthcare management.',
      },
      {
        title: 'Shared Decision-Making & Transparency',
        description:
          'Involving patients in care decisions and clear communication about treatments builds trust, improves adherence, and strengthens patient-provider relationships.',
      },
      {
        title: 'Holistic Care & Continuous Feedback',
        description:
          'Preventive approaches, equitable access, and real-time patient feedback refine services, promote wellness, and foster a culture of patient-centered innovation.',
      },
    ],
    steps: commonSteps,
  },
};

@Component({
  selector: 'app-health-care-i',
  imports: [IndustrySubUtilComponent, CommonModule],
  templateUrl: './health-care-i.component.html',
  styleUrl: './health-care-i.component.scss'
})
 


export class HealthCareIComponent implements OnInit {
route = inject(ActivatedRoute);
  currentSectionData!: Section;

 public ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const rawKey = params.get('section') || 'intelligentinnovation';
    const sectionKey = rawKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

    this.currentSectionData = sectionsData[sectionKey] ?? sectionsData['intelligentinnovation'];
  });
}

}
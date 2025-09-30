import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustrySubUtilComponent } from '../../utilities/industry-sub-util/industry-sub-util.component';
import { CommonModule } from '@angular/common';
import { SubCardsComponent } from '../../utilities/sub-cards/sub-cards.component';
import { MapSectionComponent } from '../../utilities/map-section/map-section.component';

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
  selector: 'app-education-i',
  standalone: true,
  imports: [
    IndustrySubUtilComponent,
    CommonModule,
    SubCardsComponent,
    MapSectionComponent,
  ],
  templateUrl: './education-i.component.html',
  styleUrl: './education-i.component.scss',
})
export class EducationIComponent implements OnInit {
  public currentSection = 'NetworkingEngineering';

  private route = inject(ActivatedRoute);

  sections: Record<string, Section> = {
    // NetworkingEngineering
    NetworkingEngineering: {
      heroImage: 'assets/Industries/education-sub-pages/network-engineering.jpg',
      heroHeading: ' How Can Networking Engineering Transform Modern Education?',
      smallHeading:
        'Building connected campuses with reliable, secure, and scalable networks.',
      text: 'Our Working Strategy',
      whyList: [
        {
          title: 'Reliable & Secure Connectivity',
          description:
            'High-speed campus-wide Wi-Fi keeps students, faculty, and administrators connected. With firewalls, VPNs, and encryption, sensitive student and research data remain safe from cyber threats.',
        },
        {
          title: 'Cloud & E-Learning Support',
          description:
            'Seamless cloud integration powers e-learning tools, virtual classrooms, and digital libraries. Networking engineering ensures smooth video conferencing, collaboration, and uninterrupted online education.',
        },
        {
          title: 'Scalable & Smart Infrastructure',
          description:
            'Future-ready networks scale with growing student populations and digital demand. IoT-enabled smart classrooms and digital labs create flexible, interactive learning environments.',
        },
        {
          title: 'Collaboration & Cost Efficiency',
          description:
            'Strong networks enable global research collaboration with fast, reliable data sharing. Optimized designs reduce downtime and IT costs, ensuring more resources go toward education priorities.',
        },
      ],
      steps: COMMON_STEPS,
    },

    // EducationProjectManagement
    educationProjectManagement: {
      heroImage: 'assets/Industries/education-sub-pages/project-management.jpg',
      heroHeading: 'How Can Project Management Drive Success in Education?',
      smallHeading:
        '  Ensuring efficiency, accountability, and timely delivery of educational initiatives.',
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

    // DataAnalyticsEducation
    dataAnalyticsEducation: {
      heroImage: 'assets/Industries/education-sub-pages/data-analytics.jpg',
      heroHeading: 'How Can Project Management Drive Success in Education?',
      smallHeading:
        ' Ensuring efficiency, accountability, and timely delivery of educational initiatives.',
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
  };

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const section = params.get('section');
      if (section && this.sections[section as keyof typeof this.sections]) {
        this.currentSection = section;
      }
    });
  }

  public get sectionData(): Section {
    return this.sections[this.currentSection as keyof typeof this.sections];
  }
}
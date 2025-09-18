import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustrySubUtilComponent } from '../../utilities/industry-sub-util/industry-sub-util.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education-i',
  imports: [IndustrySubUtilComponent, CommonModule],
  templateUrl: './education-i.component.html',
  styleUrl: './education-i.component.scss'
})
export class EducationIComponent implements OnInit {
 public currentSection = 'NetworkingEngineering';

  route = inject(ActivatedRoute);
  public sections = {
    //NetworkingEngineering
    networkingEngineering: {
      heroImage: 'assets/Industries/education-sub-pages/network-engineering.jpg',
      heroHeading: 'How Can Networking Engineering Transform Modern Education?',
      subHeading:
        'Building connected campuses with reliable, secure, and scalable networks.',
      introText: '',
      points: [
        {
          title: 'Reliable Campus Connectivity',
          description:
            'Educational institutions rely on uninterrupted, high-speed connectivity for classes, research, and administrative operations. Networking engineering ensures robust Wi-Fi coverage across campuses, enabling students and staff to access resources anywhere.',
        },
        {
          title: 'Secure Data Transmission',
          description:
            'Protecting sensitive information such as student records, research data, and financial details is crucial. Networking engineers implement firewalls, VPNs, and encryption to safeguard networks against cyber threats.',
        },
        {
          title: 'Cloud Integration for Education',
          description:
            'With cloud platforms powering e-learning tools and administrative systems, networking engineers ensure seamless cloud adoption. This enables scalable storage, digital libraries, and virtual learning environments.',
        },
        {
          title: 'Support for E-Learning Platforms',
          description:
            'Networking engineering strengthens virtual classrooms, video conferencing, and digital collaboration platforms, ensuring smooth communication and uninterrupted online learning experiences.',
        },
        {
          title: 'Network Scalability for Growth',
          description:
            'As student populations and digital demands increase, scalable networks are essential. Engineers design flexible systems that adapt to growing bandwidth and technology needs.',
        },
        {
          title: 'Smart Campus Infrastructure',
          description:
            'Networking supports IoT devices, smart classrooms, and digital labs that enhance teaching and learning. Engineers integrate connected devices for better classroom management and monitoring.',
        },
        {
          title: 'Research Collaboration Enablement',
          description:
            'Global academic collaborations depend on strong, secure networking. Engineers ensure universities can exchange research data quickly and reliably with international institutions.',
        },
        {
          title: 'Cost-Efficient IT Management',
          description:
            'Optimized network designs reduce downtime, minimize maintenance costs, and extend infrastructure lifespan, allowing institutions to focus resources on educational priorities.',
        },
      ],
    },
    //EducationProjectManagement
    educationProjectManagement: {
      heroImage: 'assets/Industries/education-sub-pages/project-management.jpg',
      heroHeading: 'How Can Project Management Drive Success in Education?',
      subHeading:
        'Ensuring efficiency, accountability, and timely delivery of educational initiatives.',
      introText: '',
      points: [
        {
          title: 'Streamlined Academic Program Implementation',
          description:
            'Project management ensures that new curricula, digital tools, or academic reforms are introduced smoothly. With clear timelines and responsibilities, institutions avoid delays and confusion.',
        },
        {
          title: 'Efficient Resource Allocation',
          description:
            'Educational budgets are often limited. Project managers strategically allocate funds, staff, and technology resources to maximize impact without overspending.',
        },
        {
          title: 'Technology Integration Projects',
          description:
            'From Learning Management Systems (LMS) to smart classrooms, technology projects require precise planning. Project management ensures smooth rollouts, staff training, and minimal disruptions.',
        },
        {
          title: 'Infrastructure Development',
          description:
            'Building new facilities, labs, or libraries requires careful oversight. Project management guarantees that construction or upgrades align with budgets, safety standards, and academic goals.',
        },
        {
          title: 'Stakeholder Collaboration',
          description:
            'Successful education projects require input from teachers, administrators, parents, and policymakers. Project managers foster communication and alignment across all stakeholders.',
        },
        {
          title: 'Risk Management in Education Projects',
          description:
            'Unforeseen challenges like funding cuts or technical issues can derail progress. Through risk identification and mitigation strategies, project managers ensure resilience and adaptability.',
        },
        {
          title: 'Monitoring & Evaluation of Outcomes',
          description:
            'Project management emphasizes setting measurable goals and tracking results. This helps institutions evaluate success, improve processes, and replicate best practices.',
        },
        {
          title: 'Enhancing Student-Centered Learning Initiatives',
          description:
            'Projects like digital literacy programs or career development initiatives benefit from structured management, ensuring they deliver long-term value to students.',
        },
      ],
    },
    //dataAnalyticsEducation
    dataAnalyticsEducation: {
      heroImage: 'assets/Industries/education-sub-pages/data-analytics.jpg',
      heroHeading: 'How Can Data Analytics Transform Education?',
      subHeading:
        'Unlocking insights to improve learning outcomes and institutional performance.',
      introText: '',
      points: [
        {
          title: 'Personalized Learning Pathways',
          description:
            'Analytics enables educators to track individual student progress and customize teaching methods, ensuring that each learner receives the right support at the right time.',
        },
        {
          title: 'Predictive Analytics for Student Success',
          description:
            'By analyzing attendance, engagement, and assessment patterns, institutions can predict which students are at risk of falling behind and intervene proactively.',
        },
        {
          title: 'Curriculum Effectiveness Evaluation',
          description:
            'Data insights help evaluate whether existing courses and teaching strategies are effective. This ensures curricula remain relevant and aligned with student needs and industry demands.',
        },
        {
          title: 'Improved Institutional Decision-Making',
          description:
            'From admissions planning to faculty hiring, data analytics provides leaders with actionable insights, enabling more accurate, timely, and cost-effective decisions.',
        },
        {
          title: 'Resource Optimization',
          description:
            'Institutions can track how facilities, technology, and budgets are utilized. This ensures resources are allocated efficiently and reduces unnecessary expenditure.',
        },
        {
          title: 'Enhancing Transparency & Accountability',
          description:
            'Data-driven reporting allows schools and universities to showcase performance metrics, improving trust among students, parents, and regulatory bodies.',
        },
        {
          title: 'Supporting Research & Innovation',
          description:
            'Data analytics strengthens academic research by offering deeper insights, identifying trends, and supporting evidence-based innovations in teaching and learning.',
        },
        {
          title: 'Boosting Student Engagement & Retention',
          description:
            'By monitoring participation and feedback, institutions can design engaging programs and support systems, helping students stay motivated and reducing dropout rates.',
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
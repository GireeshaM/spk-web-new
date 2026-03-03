import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './insights/insights.component';
import { TeleCommunicationsComponent } from './webmodules/industries/tele-communications/tele-communications.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ItCommonComponent } from './webmodules/it-common/it-common.component';
import { ProjectManagementComponent } from './webmodules/project-management/project-management.component';
import { SoftwareServiceUtilComponent } from './webmodules/software-service-util/software-service-util.component';
import { BankingComponent } from './webmodules/industries/banking/banking.component';
import { EducationComponent } from './webmodules/industries/education/education.component';
import { GovtComponent } from './webmodules/industries/govt/govt.component';
import { HealthCareComponent } from './webmodules/industries/health-care/health-care.component';
import { ManufacturingComponent } from './webmodules/industries/manufacturing/manufacturing.component';
import { TransportationComponent } from './webmodules/industries/transportation/transportation.component';
import { StaffingComponent } from './webmodules/staffing/staffing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BankingIComponent } from './webmodules/industriesSubPages/banking-i/banking-i.component';
import { GovernmentIComponent } from './webmodules/industriesSubPages/government-i/government-i.component';
import { EducationIComponent } from './webmodules/industriesSubPages/education-i/education-i.component';
import { HealthCareIComponent } from './webmodules/industriesSubPages/health-care-i/health-care-i.component';
import { ManufacturingIComponent } from './webmodules/industriesSubPages/manufacturing-i/manufacturing-i.component';
import { TelecommunicationIComponent } from './webmodules/industriesSubPages/telecommunication-i/telecommunication-i.component';
import { TransportationIComponent } from './webmodules/industriesSubPages/transportation-i/transportation-i.component';
import { InsightsBlogComponent } from './webmodules/insights-blog/insights-blog.component';
import { ProductComponent } from './webmodules/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'SprintPark Tech | Innovating ,Tomorrow, Today',
      description:
        'SprintPark is a leading software company delivering innovative IT, staffing, and technology solutions for businesses worldwide.',
      footerColor: '#eae8fd',
    },
  },
  //services
  // SERVICES (Parent)
  {
    path: 'services',
    component: ItCommonComponent, // OR ServicesComponent if you create one
    children: [
      {
        path: '',
        redirectTo: 'it-consulting',
        pathMatch: 'full',
      },

      {
        path: 'it-consulting',
        component: ItCommonComponent,
        data: {
          title: 'Empowering Businesses Through Technology',
          description:
            'Providing expert consulting to align technology with business goals and drive digital transformation success.',
          footerColor: 'rgba(29, 6, 99, 1)',
        },
      },

      {
        path: 'staffing',
        component: StaffingComponent,
        data: {
          title: 'Connecting Talent with Opportunity',
          description:
            'Offering specialized staffing solutions that ensure the right talent powers your organization’s success.',
          footerColor: 'rgba(29, 6, 99, 1)',
        },
      },

      {
        path: 'project-management',
        component: ProjectManagementComponent,
        data: {
          title: 'Delivering Excellence, On Time and On Budget',
          description:
            'Managing projects efficiently from planning to delivery with precision, accountability, and measurable results.',
          footerColor: 'rgba(29, 6, 99, 1)',
        },
      },

      {
        path: 'software-service',
        component: SoftwareServiceUtilComponent,
        data: {
          title: 'Building the Future with Intelligent Software',
          description:
            'Designing, developing, and maintaining innovative software systems that accelerate digital transformation.',
          footerColor: 'rgba(29, 6, 99, 1)',
        },
      },
    ],
  },

  //Industries
  // ================= INDUSTRIES =================
  {
    path: 'industries',
    children: [
      // default redirect
      {
        path: '',
        redirectTo: 'it-and-telecommunications',
        pathMatch: 'full',
      },

      // IT & TELECOMMUNICATIONS
      {
        path: 'it-and-telecommunications',
        component: TeleCommunicationsComponent,
        data: {
          title: 'Connecting the World, Seamlessly',
          description:
            'Driving digital connectivity with 5G, IoT, and cloud solutions for faster, smarter telecom operations.',
          footerColor: '#f7f7fc',
        },
      },
      {
        path: 'it-and-telecommunications/:section',
        component: TelecommunicationIComponent,
      },

      // GOVERNMENT
      {
        path: 'government',
        component: GovtComponent,
        data: {
          title: 'Transforming Governance through Innovation',
          description:
            'Empowering public institutions with secure, efficient, and citizen-focused digital solutions.',
          footerColor: '#f7f7fc',
        },
      },
      {
        path: 'government/:section',
        component: GovernmentIComponent,
      },

      // HEALTHCARE & LIFE SCIENCES
      {
        path: 'healthcare-life-sciences',
        component: HealthCareComponent,
        data: {
          title: 'Innovating for Better Health Outcomes',
          description:
            'Enhancing patient care through AI, analytics, and secure, connected healthcare systems.',
          footerColor: '#f7f7fc',
        },
      },
      {
        path: 'healthcare-life-sciences/:section',
        component: HealthCareIComponent,
      },

      // MANUFACTURING
      {
        path: 'manufacturing',
        component: ManufacturingComponent,
        data: {
          title: 'Smart Manufacturing for the Digital Age',
          description:
            'Transforming factories with IoT, automation, and data-driven insights for efficient production.',
          footerColor: '#f7f7fc',
        },
      },
      {
        path: 'manufacturing/:section',
        component: ManufacturingIComponent,
      },

      // EDUCATION
      {
        path: 'education',
        component: EducationComponent,
        data: {
          title: 'Empowering Education through Technology',
          description:
            'Reimagining learning with digital classrooms, smart tools, and personalized education platforms.',
          footerColor: '#f7f7fc',
        },
      },
      {
        path: 'education/:section',
        component: EducationIComponent,
      },

      // TRANSPORTATION & LOGISTICS
      {
        path: 'transportation-logistics',
        component: TransportationComponent,
        data: {
          title: 'Driving the Future of Mobility',
          description:
            'Optimizing logistics and mobility with real-time data, automation, and connected technologies.',
          footerColor: '#f7f7fc',
        },
      },
      {
        path: 'transportation-logistics/:section',
        component: TransportationIComponent,
      },

      // BANKING
      {
        path: 'banking',
        component: BankingComponent,
        data: {
          title: 'Redefining Financial Innovation',
          description:
            'Accelerating digital banking with AI, automation, and secure, customer-centric platforms.',
          footerColor: '#f7f7fc',
        },
      },
      {
        path: 'banking/:section',
        component: BankingIComponent,
      },
    ],
  },

  //careers
  {
    path: 'careers',
    component: CareersComponent,
    data: {
      title: 'Sprintpark Careers| Build, Grow, Innovate with Us',
      description:
        'Join SprintPark to build innovative tech solutions. Explore career opportunities, grow your skills, and be part of a dynamic, forward-thinking team.',
      footerColor: '#fff',
    },
  },
  {
    path: 'job-summary/:jobId',
    loadComponent: () =>
      import('./job-summary/job-summary.component').then(
        (m) => m.JobSummaryComponent,
      ),
    data: {
      footerColor: 'rgba(249, 249, 255, 1)',
    },
  },
  //insights
  {
    path: 'insights',
    component: InsightsComponent,
    data: {
      title: 'SprintPark’s Insights | Ideas that Power the Future',
      description:
        'Explore SprintPark Insights for the latest tech trends, industry updates, and expert perspectives driving innovation and digital transformation.',
    },
  },
  //insights-blog
  {
    path: 'insights/:section',
    component: InsightsBlogComponent,
    data: {
      title: '',
      description: '',
    },
  },

  //contact-us
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: {
      title: 'Sprintpark’s Contact us| Let’s Create Something Extraordinary',
      description:
        'Get in touch with SprintPark. Connect with our team for software solutions, partnerships, or support.',
      footerColor: 'rgba(255, 255, 255, 1)',
    },
  },
  {
    path: 'products',
    component: ProductComponent,
    data: {
      footerColor: 'rgba(255, 255, 255, 1)',
    },
  },
  {
    path: 'products/:id',
    component: ProductComponent,
    data: {
      footerColor: 'rgba(255, 255, 255, 1)',
    },
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

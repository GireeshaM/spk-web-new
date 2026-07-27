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
import { LegalPageComponent } from './legal-page/legal-page.component';

const legacyRedirectRoutes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'it-consulting',
    redirectTo: 'services/it-consulting',
    pathMatch: 'full',
  },
  {
    path: 'staffing',
    redirectTo: 'services/staffing',
    pathMatch: 'full',
  },
  {
    path: 'project-management',
    redirectTo: 'services/project-management',
    pathMatch: 'full',
  },
  {
    path: 'software-service',
    redirectTo: 'services/software-service',
    pathMatch: 'full',
  },
  {
    path: 'it-assess',
    redirectTo: 'services/it-consulting',
    pathMatch: 'full',
  },
  {
    path: 'it-infra',
    redirectTo: 'services/it-consulting',
    pathMatch: 'full',
  },
  {
    path: 'staffingSolutions',
    redirectTo: 'services/staffing',
    pathMatch: 'full',
  },
  {
    path: 'itAndTelecommunications',
    redirectTo: 'industries/it-and-telecommunications',
    pathMatch: 'full',
  },
  {
    path: 'itTelecommunications',
    redirectTo: 'industries/it-and-telecommunications',
    pathMatch: 'full',
  },
  {
    path: 'healthCareAndLifeSciences',
    redirectTo: 'industries/healthcare-life-sciences',
    pathMatch: 'full',
  },
  {
    path: 'transportationAndLogistics',
    redirectTo: 'industries/transportation-logistics',
    pathMatch: 'full',
  },
  {
    path: 'government',
    redirectTo: 'industries/government',
    pathMatch: 'full',
  },
  {
    path: 'manufacturing',
    redirectTo: 'industries/manufacturing',
    pathMatch: 'full',
  },
  {
    path: 'education',
    redirectTo: 'industries/education',
    pathMatch: 'full',
  },
  {
    path: 'banking',
    redirectTo: 'industries/banking',
    pathMatch: 'full',
  },
  {
    path: 'telecommunication/:section',
    redirectTo: 'industries/it-and-telecommunications/:section',
  },
  {
    path: 'government/:section',
    redirectTo: 'industries/government/:section',
  },
  {
    path: 'transport/:section',
    redirectTo: 'industries/transportation-logistics/:section',
  },
  {
    path: 'healthcare/:section',
    redirectTo: 'industries/healthcare-life-sciences/:section',
  },
  {
    path: 'banking/:section',
    redirectTo: 'industries/banking/:section',
  },
  {
    path: 'education/:section',
    redirectTo: 'industries/education/:section',
  },
  {
    path: 'manufacturing/:section',
    redirectTo: 'industries/manufacturing/:section',
  },
  {
    path: 'industries/transportation-and-logistics',
    redirectTo: 'industries/transportation-logistics',
    pathMatch: 'full',
  },
  {
    path: 'industries/transportation-and-logistics/:section',
    redirectTo: 'industries/transportation-logistics/:section',
  },
  {
    path: 'networkEngineering',
    redirectTo: 'industries/transportation-logistics/networkEngineering',
    pathMatch: 'full',
  },
  {
    path: 'insightsBlog',
    redirectTo: 'insights/marketing-excellence',
    pathMatch: 'full',
  },
  {
    path: 'java',
    redirectTo: 'careers',
    pathMatch: 'full',
  },
];

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
  ...legacyRedirectRoutes,
  //services
  // SERVICES (Parent)
  {
    path: 'services',
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
        data: {
          title: 'IT & Telecommunications Solutions | SprintPark',
          description:
            'Explore SprintPark IT and telecommunications solutions for data privacy, automation, infrastructure, and managed services.',
        },
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
        data: {
          title: 'Government Technology Solutions | SprintPark',
          description:
            'Explore SprintPark government technology solutions for secure modernization, data analytics, risk management, and citizen services.',
        },
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
        data: {
          title: 'Healthcare & Life Sciences Solutions | SprintPark',
          description:
            'Explore SprintPark healthcare and life sciences solutions for secure data, connected systems, patient innovation, and project delivery.',
        },
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
        data: {
          title: 'Manufacturing Technology Solutions | SprintPark',
          description:
            'Explore SprintPark manufacturing solutions for Salesforce integration, analytics, project management, and IT consulting.',
        },
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
        data: {
          title: 'Education Technology Solutions | SprintPark',
          description:
            'Explore SprintPark education technology solutions for network engineering, analytics, and digital project delivery.',
        },
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
        data: {
          title: 'Transportation & Logistics Solutions | SprintPark',
          description:
            'Explore SprintPark transportation and logistics solutions for IT consulting, network engineering, Salesforce AI, and connected operations.',
        },
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
        data: {
          title: 'Banking Technology Solutions | SprintPark',
          description:
            'Explore SprintPark banking technology solutions for big data, cybersecurity, project management, and AI innovation.',
        },
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
      title: 'Careers at SprintPark | Job Details',
      description:
        'View SprintPark job details, responsibilities, required skills, and application information for current technology career opportunities.',
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
      title: 'SprintPark Technology Insight',
      description:
        'Read SprintPark insights on Salesforce, automation, analytics, cloud technology, and digital transformation.',
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
      title: 'SprintPark Products | AI-Powered Business Platforms',
      description:
        'Explore SprintPark products for smart rack management, interior collaboration, learning management, and AI-driven code security.',
      footerColor: 'rgba(255, 255, 255, 1)',
    },
  },
  {
    path: 'products/:id',
    component: ProductComponent,
    data: {
      title: 'SprintPark Product Details',
      description:
        'Explore SprintPark product details, features, and business use cases for AI-powered digital platforms.',
      footerColor: 'rgba(255, 255, 255, 1)',
    },
  },
  {
    path: 'privacy-policy',
    component: LegalPageComponent,
    data: {
      title: 'Privacy Policy | SprintPark',
      description: 'SprintPark privacy policy.',
      footerColor: 'rgba(255, 255, 255, 1)',
      legalPage: {
        title: 'Privacy Policy',
        intro: 'Effective Date: July 3, 2026',
        sections: [
          {
            heading: 'Introduction',
            body: 'SprintPark Solutions Pvt Ltd ("SprintPark", "we", "our", or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, store, and safeguard information when you visit our website, https://www.sprintpark.com, or interact with us. By using our website, you agree to the practices described in this Privacy Policy.',
          },
          {
            heading: '1. Information We Collect',
            body: 'We may collect the following types of information:',
          },
          {
            heading: 'Information You Provide Voluntarily',
            body: '',
            items: [
              'Name',
              'Company name',
              'Email address',
              'Phone number',
              'Job title',
              'Inquiry details and messages submitted through contact forms',
              'Any additional information you choose to provide',
            ],
          },
          {
            heading: 'Automatically Collected Information',
            body: 'When you visit our website, we may automatically collect certain technical information, including:',
            items: [
              'IP address',
              'Browser type and version',
              'Device information',
              'Operating system',
              'Access dates and times',
              'Referring URLs',
              'Pages viewed and website interaction data',
            ],
          },
          {
            heading: '2. How We Use Your Information',
            body: 'We may use collected information to:',
            items: [
              'Respond to inquiries and requests.',
              'Communicate regarding our services and solutions.',
              'Prepare proposals and business communications.',
              'Provide customer support.',
              'Improve website performance and user experience.',
              'Maintain website security and prevent unauthorized activities.',
              'Comply with legal and regulatory obligations.',
              'Establish and maintain business relationships.',
            ],
          },
          {
            heading: '3. Cookies and Tracking Technologies',
            body: 'SprintPark uses cookies and similar technologies to ensure our website functions properly and to help us understand website usage through Google Analytics 4 when analytics consent is provided. Essential cookies, if used, are always enabled because they are necessary for core website functionality. Analytics cookies are optional and can be accepted, rejected, or changed at any time through Cookie Settings. SprintPark does not use analytics cookies for advertising or personalized marketing.',
          },
          {
            heading: '4. Information Sharing',
            body: 'SprintPark does not sell, rent, or trade personal information. We may share information only in the following circumstances:',
            items: [
              'With trusted service providers supporting our business operations.',
              'To comply with legal obligations or lawful governmental requests.',
              'To protect our rights, security, and property.',
              'In connection with a merger, acquisition, or corporate restructuring.',
            ],
          },
          {
            heading: '5. Data Security',
            body: 'We implement reasonable technical, administrative, and organizational safeguards to protect personal information from unauthorized access, disclosure, alteration, or destruction. While we strive to protect your information, no method of electronic transmission or storage is completely secure. Therefore, we cannot guarantee absolute security.',
          },
          {
            heading: '6. Data Retention',
            body: 'We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce agreements.',
          },
          {
            heading: '7. International Data Transfers',
            body: 'SprintPark operates globally. Information collected through our website may be transferred to and processed in countries outside your country of residence in accordance with applicable laws.',
          },
          {
            heading: '8. Your Rights',
            body: 'Depending on applicable laws, you may have the right to:',
            items: [
              'Access your personal information.',
              'Correct inaccurate information.',
              'Request deletion of your information.',
              'Request a copy of your information.',
              'Object to certain processing activities.',
              'Withdraw consent where applicable.',
              'Requests may be submitted using the contact information below.',
            ],
          },
          {
            heading: '9. Third-Party Websites',
            body: 'Our website may contain links to third-party websites. SprintPark is not responsible for the privacy practices or content of such websites. We encourage users to review the privacy policies of those websites.',
          },
          {
            heading: "10. Children's Privacy",
            body: 'Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children.',
          },
          {
            heading: '11. Changes to This Privacy Policy',
            body: 'SprintPark reserves the right to update this Privacy Policy at any time. Changes will be posted on this page along with an updated Effective Date.',
          },
          {
            heading: '12. Contact Us',
            body: 'If you have any questions regarding this Privacy Policy or our data practices, please contact us:',
            contactLines: [
              'SprintPark Solutions Pvt Ltd',
              '85 Felt Rd, Unit #604',
              'South Windsor, Connecticut 06074, USA',
              'Email: info@sprintpark.com',
            ],
          },
        ],
      },
    },
  },
  {
    path: 'cookie-policy',
    component: LegalPageComponent,
    data: {
      title: 'Cookie Policy | SprintPark',
      description: 'SprintPark cookie policy.',
      footerColor: 'rgba(255, 255, 255, 1)',
      legalPage: {
        title: 'Cookie Policy',
        intro: 'Effective Date: July 22, 2026',
        sections: [
          {
            heading: 'Overview',
            body: 'SprintPark uses cookies and similar technologies to ensure our website functions properly and to help us understand how visitors use our website through Google Analytics. Analytics cookies help us improve website performance and user experience.',
          },
          {
            heading: 'What Cookies Are',
            body: 'Cookies are small text files that a website may store on your browser or device. They can help a website remember basic information, improve navigation, keep pages working correctly, or understand how visitors interact with the site.',
          },
          {
            heading: 'Essential Cookies',
            body: 'Essential cookies, if used, are always enabled because they are necessary for the operation and security of the website. They cannot be disabled because they are required to provide core website functionality.',
          },
          {
            heading: 'Analytics Cookies',
            body: 'Analytics cookies are optional. SprintPark uses Google Analytics 4 to measure website traffic, identify popular pages, and improve website performance and user experience. Analytics information may include pages visited, time spent on pages, device and browser information, general geographic region, traffic source, and website interactions.',
            items: [
              'Analytics cookies are off until consent is given.',
              'SprintPark does not use analytics cookies for advertising or personalized marketing.',
              'Analytics cookie duration may be up to 24 months depending on configuration.',
            ],
          },
          {
            heading: 'Managing Preferences',
            body: 'You can accept or reject analytics cookies at any time through the cookie consent banner or the Cookie Settings link in the footer. By clicking "Accept All," you consent to analytics cookies. By clicking "Reject Non-Essential," only essential cookies will be used. You can also use browser settings to delete or block cookies.',
          },
          {
            heading: 'Cookie Declaration',
            body: 'The following table summarizes the cookie categories used on the SprintPark website.',
            cookieTable: [
              {
                category: 'Essential Cookies',
                purpose: 'Website functionality and security',
                provider: 'SprintPark',
                duration: 'Session',
                required: 'Yes',
              },
              {
                category: 'Analytics Cookies',
                purpose: 'Website usage statistics and performance',
                provider: 'Google Analytics 4',
                duration: 'Up to 24 months (configuration dependent)',
                required: 'No',
              },
            ],
          },
          {
            heading: 'Updates to This Policy',
            body: 'SprintPark may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.',
          },
          {
            heading: 'Contact',
            body: 'For questions about this Cookie Policy, please contact us:',
            contactLines: [
              'SprintPark Solutions Pvt Ltd',
              '85 Felt Rd, Unit #604',
              'South Windsor, Connecticut 06074, USA',
              'Email: info@sprintpark.com',
            ],
          },
        ],
      },
    },
  },
  {
    path: 'terms-and-conditions',
    component: LegalPageComponent,
    data: {
      title: 'Terms & Conditions | SprintPark',
      description: 'SprintPark terms and conditions.',
      footerColor: 'rgba(255, 255, 255, 1)',
      legalPage: {
        title: 'Terms & Conditions',
        intro: 'Effective Date: July 3, 2026',
        sections: [
          {
            heading: 'Welcome',
            body: 'Welcome to https://www.sprintpark.com ("Website"). These Terms & Conditions ("Terms") govern your access to and use of the Website operated by SprintPark Solutions Pvt Ltd ("SprintPark", "we", "our", or "us"). By accessing or using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, please do not use this Website.',
          },
          {
            heading: '1. Use of the Website',
            body: 'You agree to use this Website only for lawful purposes and in accordance with these Terms. You must not use the Website:',
            items: [
              'In any manner that violates applicable laws or regulations.',
              'To transmit or distribute malicious software, viruses, or harmful code.',
              'To attempt unauthorized access to any portion of the Website, servers, or systems.',
              'To interfere with or disrupt the security, functionality, or availability of the Website.',
              'To engage in fraudulent, abusive, or harmful activities.',
              'SprintPark reserves the right to restrict or terminate access to users who violate these Terms.',
            ],
          },
          {
            heading: '2. Intellectual Property Rights',
            body: 'All content available on this Website, including but not limited to text, graphics, logos, icons, images, videos, software, designs, trademarks, and other materials, is the exclusive property of SprintPark or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, modify, distribute, publish, transmit, display, sell, or exploit any Website content without prior written permission from SprintPark.',
          },
          {
            heading: '3. Website Content',
            body: 'The information provided on this Website is intended for general informational purposes only. While SprintPark makes reasonable efforts to ensure the accuracy and completeness of the information presented, we do not guarantee that all content is accurate, complete, current, or error-free. SprintPark reserves the right to modify, update, or remove Website content at any time without prior notice.',
          },
          {
            heading: '4. User Submissions',
            body: 'If you submit inquiries, feedback, suggestions, or other materials through the Website, you grant SprintPark a non-exclusive, worldwide, royalty-free license to use, reproduce, and respond to such submissions for business purposes. You represent that any information provided by you is accurate and does not violate the rights of any third party.',
          },
          {
            heading: '5. Third-Party Links',
            body: 'The Website may contain links to third-party websites for your convenience. SprintPark does not own, control, endorse, or assume responsibility for the content, policies, or practices of third-party websites. Access to third-party websites is at your own risk.',
          },
          {
            heading: '6. Disclaimer of Warranties',
            body: 'The Website and all content provided on the Website are made available on an "as is" and "as available" basis without warranties of any kind, whether express or implied. SprintPark expressly disclaims all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, availability, security, and accuracy.',
          },
          {
            heading: '7. Limitation of Liability',
            body: 'To the fullest extent permitted by applicable law, SprintPark, its directors, employees, affiliates, partners, and licensors shall not be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages arising out of or related to your use of, or inability to use, the Website. This limitation applies regardless of the legal theory under which such damages are claimed.',
          },
          {
            heading: '8. Indemnification',
            body: "You agree to defend, indemnify, and hold harmless SprintPark, its officers, employees, affiliates, and agents from and against any claims, damages, liabilities, losses, costs, and expenses, including reasonable attorneys' fees, arising from:",
            items: [
              'Your use of the Website.',
              'Your violation of these Terms.',
              'Your violation of any rights of another party.',
            ],
          },
          {
            heading: '9. Privacy',
            body: 'Your use of this Website is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect personal information.',
          },
          {
            heading: '10. Suspension or Termination',
            body: 'SprintPark reserves the right, at its sole discretion, to suspend, restrict, or terminate access to the Website at any time, without notice, for conduct that violates these Terms or is otherwise harmful to SprintPark or other users.',
          },
          {
            heading: '11. Governing Law',
            body: 'These Terms shall be governed by and construed in accordance with the laws of the State of Connecticut, United States, without regard to conflict of law principles. Any disputes arising from these Terms or use of the Website shall be subject to the exclusive jurisdiction of the courts located in Connecticut, USA.',
          },
          {
            heading: '12. Changes to These Terms',
            body: 'SprintPark may revise these Terms at any time by updating this page. Changes become effective immediately upon publication on the Website. Your continued use of the Website after changes are posted constitutes your acceptance of the revised Terms.',
          },
          {
            heading: '13. Contact Information',
            body: 'If you have any questions regarding these Terms & Conditions, please contact us:',
            contactLines: [
              'SprintPark Solutions Pvt Ltd',
              '85 Felt Rd, Unit #604',
              'South Windsor, Connecticut 06074, USA',
              'Email: info@sprintpark.com',
            ],
          },
        ],
      },
    },
  },
  {
    path: 'disclaimer',
    component: LegalPageComponent,
    data: {
      title: 'Disclaimer | SprintPark',
      description: 'SprintPark website disclaimer.',
      footerColor: 'rgba(255, 255, 255, 1)',
      legalPage: {
        title: 'Disclaimer',
        intro: 'Effective Date: July 3, 2026',
        sections: [
          {
            heading: 'General Information',
            body: 'The information provided on https://www.sprintpark.com ("Website") is for general informational purposes only. The Website is owned and operated by SprintPark Solutions Pvt Ltd ("SprintPark", "we", "our", or "us").',
          },
          {
            heading: 'Information Accuracy',
            body: 'While SprintPark makes every reasonable effort to ensure that the information presented on this Website is accurate, complete, current, and reliable, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, availability, or adequacy of any information, products, services, or related graphics contained on the Website for any purpose. Any reliance you place on information obtained from this Website is strictly at your own risk.',
          },
          {
            heading: 'Professional Disclaimer',
            body: 'The content available on this Website does not constitute legal, financial, business, technical, tax, or professional advice. Users should seek appropriate professional guidance before making business, financial, legal, or technical decisions based on information obtained from this Website.',
          },
          {
            heading: 'External Links Disclaimer',
            body: 'This Website may contain links to third-party websites, services, or resources provided solely for convenience and informational purposes. SprintPark does not own, control, endorse, monitor, or guarantee the accuracy, relevance, availability, or completeness of information available on third-party websites. SprintPark shall not be responsible for any loss or damage arising from your use of third-party websites or services. Users access external websites entirely at their own risk and should review their respective terms and privacy policies.',
          },
          {
            heading: 'Website Availability Disclaimer',
            body: 'SprintPark does not guarantee that the Website will always be available, uninterrupted, secure, timely, or free from errors, defects, viruses, or other harmful components. We reserve the right to suspend, withdraw, modify, or discontinue any aspect of the Website without prior notice.',
          },
          {
            heading: 'Limitation of Liability',
            body: 'To the fullest extent permitted by applicable law, SprintPark, its directors, employees, affiliates, partners, licensors, and service providers shall not be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising out of or related to the use of, inability to use, or reliance upon this Website or its content. This limitation applies regardless of the legal theory under which such claims may arise.',
          },
          {
            heading: 'No Warranties',
            body: 'All information and content on this Website are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, and availability.',
          },
          {
            heading: 'Changes to This Disclaimer',
            body: 'SprintPark reserves the right to modify, update, or revise this Disclaimer at any time without prior notice. Any changes will become effective immediately upon publication on this page. Your continued use of the Website following the posting of changes constitutes acceptance of those changes.',
          },
          {
            heading: 'Contact Us',
            body: 'If you have any questions regarding this Disclaimer, please contact us:',
            contactLines: [
              'SprintPark Solutions Pvt Ltd',
              '85 Felt Rd, Unit #604',
              'South Windsor, Connecticut 06074, USA',
              'Email: info@sprintpark.com',
            ],
          },
        ],
      },
    },
  },
  {
    path: 'accessibility',
    component: LegalPageComponent,
    data: {
      title: 'Accessibility Statement | SprintPark',
      description: 'SprintPark accessibility statement.',
      footerColor: 'rgba(255, 255, 255, 1)',
      legalPage: {
        title: 'Accessibility Statement',
        intro: 'Effective Date: July 3, 2026',
        sections: [
          {
            heading: 'Our Commitment',
            body: 'SprintPark Solutions Pvt Ltd is committed to providing a website that is accessible and usable for all visitors, including people with disabilities.',
          },
          {
            heading: 'Accessibility Practices',
            body: 'We strive to follow recognized accessibility best practices by using clear navigation, meaningful headings, readable content, responsive layouts, and continuous improvements to website usability.',
          },
          {
            heading: 'Feedback',
            body: 'Accessibility is an ongoing effort. If you experience difficulty accessing any content on our website or have suggestions for improvement, please let us know. When contacting us, please include:',
            items: [
              'The page or URL where you experienced the issue.',
              'A description of the problem.',
              'The device and browser you were using, if known.',
            ],
          },
          {
            heading: 'Response',
            body: 'We will make reasonable efforts to investigate and address accessibility concerns promptly.',
          },
          {
            heading: 'Contact',
            body: '',
            contactLines: [
              'SprintPark Solutions Pvt Ltd',
              '85 Felt Rd, Unit #604',
              'South Windsor, Connecticut 06074, USA',
              'Email: info@sprintpark.com',
            ],
          },
        ],
      },
    },
  },
  {
    path: 'accessability',
    redirectTo: 'accessibility',
    pathMatch: 'full',
  },

  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: 'Page Not Found | SprintPark',
      description: 'The SprintPark page you requested could not be found.',
    },
  },
];

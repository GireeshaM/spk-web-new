import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface JobDetail {
  title: string;
  location: string;
  jobId: string;
  summary: string;
  image: string;
  responsibilities: string[];
  requiredSkills: string[];
  preferredSkills: string[];
}

@Component({
  selector: 'app-job-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-summary.component.html',
  styleUrl: './job-summary.component.scss'
})
export class JobSummaryComponent {

  job!: JobDetail;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('jobId');
    this.loadJob(jobId);
  }

  /* ================= JOB DATA MAP ================= */
private JOB_DETAILS: Record<string, JobDetail> = {

  /* ================= NETWORKING LEAD ================= */
  'NET-001': {
    title: 'Networking Lead',
    location: 'Hyderabad, India',
    jobId: 'NET-001',
    image: 'assets/careers/networking-lead.jpg',
    summary:
      'We are seeking a skilled Networking Lead to oversee the design, implementation, and management of enterprise network infrastructure. The role involves leading networking operations, ensuring performance, security, and reliability, and collaborating with cross-functional teams to support business and technology goals.',

    responsibilities: [
      'Lead the design and maintenance of LAN, WAN, WLAN, and data center networks.',
      'Monitor network performance and troubleshoot complex issues.',
      'Ensure network security, availability, and compliance with best practices.',
      'Manage firewalls, VPNs, routing, and switching environments.',
      'Plan and execute network upgrades, expansions, and migrations.',
      'Collaborate with cloud, security, and DevOps teams.',
      'Guide and mentor network engineers and junior team members.',
      'Maintain network documentation, diagrams, and SOPs.'
    ],

    requiredSkills: [
      'Bachelor’s degree in Computer Science, IT, or a related field.',
      '6+ years of experience in networking with leadership exposure.',
      'Strong knowledge of TCP/IP, routing protocols (BGP, OSPF), VLANs, and VPNs.',
      'Hands-on experience with routers, switches, and firewalls.',
      'Experience in network troubleshooting and performance optimization.',
      'Good communication and team coordination skills.'
    ],

    preferredSkills: [
      'Experience with cloud networking (AWS, Azure, or GCP).',
      'Knowledge of network security tools and practices (IDS/IPS, Zero Trust).',
      'Experience with automation and monitoring tools (Ansible, SolarWinds, Nagios).',
      'Networking certifications such as CCNP, CCIE, or equivalent.',
      'Experience working in enterprise or large-scale environments.'
    ]
  },
 'NET-002': {
    title: 'Networking Lead',
    location: 'South Windso,Connecticut',
    jobId: 'NET-002',
    image: 'assets/careers/networking-lead.jpg',
    summary:
      'We are seeking a skilled Networking Lead to oversee the design, implementation, and management of enterprise network infrastructure. The role involves leading networking operations, ensuring performance, security, and reliability, and collaborating with cross-functional teams to support business and technology goals.',

    responsibilities: [
      'Lead the design and maintenance of LAN, WAN, WLAN, and data center networks.',
      'Monitor network performance and troubleshoot complex issues.',
      'Ensure network security, availability, and compliance with best practices.',
      'Manage firewalls, VPNs, routing, and switching environments.',
      'Plan and execute network upgrades, expansions, and migrations.',
      'Collaborate with cloud, security, and DevOps teams.',
      'Guide and mentor network engineers and junior team members.',
      'Maintain network documentation, diagrams, and SOPs.'
    ],

    requiredSkills: [
      'Bachelor’s degree in Computer Science, IT, or a related field.',
      '6+ years of experience in networking with leadership exposure.',
      'Strong knowledge of TCP/IP, routing protocols (BGP, OSPF), VLANs, and VPNs.',
      'Hands-on experience with routers, switches, and firewalls.',
      'Experience in network troubleshooting and performance optimization.',
      'Good communication and team coordination skills.'
    ],

    preferredSkills: [
      'Experience with cloud networking (AWS, Azure, or GCP).',
      'Knowledge of network security tools and practices (IDS/IPS, Zero Trust).',
      'Experience with automation and monitoring tools (Ansible, SolarWinds, Nagios).',
      'Networking certifications such as CCNP, CCIE, or equivalent.',
      'Experience working in enterprise or large-scale environments.'
    ]
  },
  /* ================= SALESFORCE DEVELOPER ================= */
  'SF-001': {
    title: 'Salesforce Developer',
    location: 'Hyderabad, India',
    jobId: 'SF-001',
    image: 'assets/careers/salesforce-developer.jpg',
    summary:
      'We are looking for a skilled Salesforce Developer to design, develop, and maintain scalable Salesforce solutions. The role involves customizing Salesforce platforms, building integrations, and collaborating with business and technical teams to deliver high-quality CRM solutions.',

    responsibilities: [
      'Design, develop, and deploy Salesforce applications and customizations.',
      'Build and maintain Apex classes, triggers, Visualforce pages, and Lightning components.',
      'Customize Salesforce objects, workflows, validation rules, and reports.',
      'Integrate Salesforce with third-party systems using REST/SOAP APIs.',
      'Perform code reviews, testing, debugging, and deployments.',
      'Ensure best practices for security, performance, and scalability.',
      'Collaborate with stakeholders to understand business requirements.',
      'Maintain technical documentation and support ongoing enhancements.'
    ],

    requiredSkills: [
      'Bachelor’s degree in Computer Science, IT, or related field.',
      '3+ years of experience as a Salesforce Developer.',
      'Strong experience with Apex, SOQL, SOSL, and Lightning Web Components (LWC).',
      'Good understanding of Salesforce data and security models.',
      'Experience with Salesforce integrations and APIs.',
      'Familiarity with Agile/Scrum development methodology.'
    ],

    preferredSkills: [
      'Salesforce certifications (Platform Developer I/II preferred).',
      'Experience with Sales Cloud, Service Cloud, or Experience Cloud.',
      'Knowledge of CI/CD tools and Salesforce deployment tools.',
      'Experience with JavaScript frameworks and web technologies.',
      'Experience in enterprise Salesforce implementations.'
    ]
  },

  /* ================= BENCH SALES MANAGER (US STAFFING) ================= */
  'BSM-001': {
    title: 'Bench Sales Manager (US Staffing)',
    location: 'Hyderabad, India – US Market',
    jobId: 'BSM-001',
    image: 'assets/careers/bench-sales-manager.jpg',
    summary:
      'We are looking for an experienced Bench Sales Manager to handle and market consultant profiles for the US IT staffing market. The role involves managing the bench, building strong vendor relationships, and ensuring maximum placements across C2C, W2, and 1099 requirements.',

    responsibilities: [
      'Market IT consultants (bench resources) to US clients, vendors, and system integrators.',
      'Work on US requirements for C2C, W2, and 1099 positions.',
      'Build and maintain strong relationships with US vendors, MSPs, and clients.',
      'Negotiate rates, contracts, and placement terms.',
      'Track consultant availability, submissions, interviews, and placements.',
      'Coordinate with recruiters for resumes, skills, and candidate readiness.',
      'Ensure compliance with US staffing processes and documentation.',
      'Achieve placement targets and revenue goals.'
    ],

    requiredSkills: [
      'Bachelor’s degree or equivalent professional experience.',
      '5+ years of experience in US IT Bench Sales or Staffing.',
      'Strong understanding of US hiring models (C2C, W2, 1099).',
      'Proven experience marketing consultants to US clients and vendors.',
      'Excellent communication, negotiation, and interpersonal skills.',
      'Ability to work US time zones.'
    ],

    preferredSkills: [
      'Existing vendor and client network in the US staffing market.',
      'Experience handling multiple consultants simultaneously.',
      'Knowledge of ATS/CRM tools.',
      'Leadership or team-handling experience.',
      'Strong reporting and pipeline management skills.'
    ]
  },
   'BSM-002': {
    title: 'Bench Sales Manager (US Staffing)',
    location: 'South Windso,Connecticut',
    jobId: 'BSM-002',
    image: 'assets/careers/bench-sales-manager.jpg',
    summary:
      'We are looking for an experienced Bench Sales Manager to handle and market consultant profiles for the US IT staffing market. The role involves managing the bench, building strong vendor relationships, and ensuring maximum placements across C2C, W2, and 1099 requirements.',

    responsibilities: [
      'Market IT consultants (bench resources) to US clients, vendors, and system integrators.',
      'Work on US requirements for C2C, W2, and 1099 positions.',
      'Build and maintain strong relationships with US vendors, MSPs, and clients.',
      'Negotiate rates, contracts, and placement terms.',
      'Track consultant availability, submissions, interviews, and placements.',
      'Coordinate with recruiters for resumes, skills, and candidate readiness.',
      'Ensure compliance with US staffing processes and documentation.',
      'Achieve placement targets and revenue goals.'
    ],

    requiredSkills: [
      'Bachelor’s degree or equivalent professional experience.',
      '5+ years of experience in US IT Bench Sales or Staffing.',
      'Strong understanding of US hiring models (C2C, W2, 1099).',
      'Proven experience marketing consultants to US clients and vendors.',
      'Excellent communication, negotiation, and interpersonal skills.',
      'Ability to work US time zones.'
    ],

    preferredSkills: [
      'Existing vendor and client network in the US staffing market.',
      'Experience handling multiple consultants simultaneously.',
      'Knowledge of ATS/CRM tools.',
      'Leadership or team-handling experience.',
      'Strong reporting and pipeline management skills.'
    ]
  },

  /* ================= BENCH SALES RECRUITER ================= */
  'BSR-001': {
    title: 'Bench Sales Recruiter (US Staffing)',
    location: 'USA',
    jobId: 'BSR-001',
    image: 'assets/careers/bench-sales-recruiter-us.jpg',
    summary:
      'We are seeking an energetic Bench Sales Recruiter to market IT consultants to the US staffing market and ensure timely placements across multiple hiring models.',

    responsibilities: [
      'Market bench consultants to US clients, vendors, and system integrators.',
      'Submit consultant profiles for C2C, W2, and 1099 positions.',
      'Coordinate interviews, follow-ups, and feedback.',
      'Maintain daily submissions, interview tracking, and placement records.',
      'Negotiate rates and terms under management guidance.',
      'Build and maintain strong vendor relationships.',
      'Update consultant availability, skills, and status regularly.',
      'Ensure compliance with US staffing processes.'
    ],

    requiredSkills: [
      'Bachelor’s degree or equivalent professional experience.',
      '2–5 years of experience in US IT Bench Sales or Staffing.',
      'Strong knowledge of US staffing models (C2C, W2, 1099).',
      'Excellent verbal and written communication skills.',
      'Ability to work US time zones.',
      'Good understanding of IT technologies and roles.'
    ],

    preferredSkills: [
      'Existing US vendor database.',
      'Experience using ATS/CRM tools.',
      'Strong negotiation and follow-up skills.',
      'Ability to manage multiple consultants.',
      'Target-driven and result-oriented mindset.'
    ]
  },

  /* ================= SALES & MARKETING HEAD ================= */
  'SMH-001': {
    title: 'Sales & Marketing Head',
    location: 'Hyderabad, India – US Market',
    jobId: 'SMH-001',
    image: 'assets/careers/sales-head.jpg',
    summary:
      'We are looking for a strategic and results-driven Sales & Marketing Head to lead business growth across India and the US market.',

    responsibilities: [
      'Define and execute sales and marketing strategies.',
      'Drive new business acquisition and account growth.',
      'Lead sales, marketing, and business development teams.',
      'Build strong enterprise client and partner relationships.',
      'Oversee digital marketing, branding, and lead generation.',
      'Set revenue targets, KPIs, and performance metrics.',
      'Analyze market trends and competition.',
      'Collaborate with leadership and delivery teams.'
    ],

    requiredSkills: [
      'Bachelor’s degree in Business, Marketing, or related field (MBA preferred).',
      '8+ years of experience in sales and marketing leadership.',
      'Strong exposure to US and India markets.',
      'Proven revenue growth and team leadership experience.',
      'Excellent communication and negotiation skills.'
    ],

    preferredSkills: [
      'Experience in IT services, staffing, or consulting.',
      'Strong understanding of digital marketing and branding.',
      'Existing US client or partner network.',
      'Experience scaling high-growth organizations.'
    ]
  },

  /* ================= DIGITAL MARKETING EXECUTIVE ================= */
  'DM-001': {
    title: 'Digital Marketing Executive',
    location: 'Hyderabad, India',
    jobId: 'DM-001',
    image: 'assets/careers/digital-marketing.jpg',
    summary:
      'We are looking for a creative and data-driven Digital Marketing Executive to plan, execute, and optimize online marketing campaigns.',

    responsibilities: [
      'Plan and execute digital marketing campaigns.',
      'Manage social media platforms and paid ads.',
      'Create content, creatives, and marketing calendars.',
      'Monitor campaign performance and analytics.',
      'Improve website traffic through SEO.',
      'Coordinate with design and content teams.',
      'Track trends and suggest growth strategies.'
    ],

    requiredSkills: [
      'Bachelor’s degree in Marketing or related field.',
      '1–4 years of digital marketing experience.',
      'Hands-on experience with SEO, SEM, and social media.',
      'Knowledge of Google Analytics and ad platforms.',
      'Strong communication and content writing skills.'
    ],

    preferredSkills: [
      'Experience with marketing automation tools.',
      'Knowledge of Canva or basic video editing.',
      'B2B marketing experience.',
      'Digital Marketing or Google Ads certification.'
    ]
  },

  /* ================= UI/UX DESIGNER ================= */
  'UX-001': {
    title: 'UI/UX Designer',
    location: 'Hyderabad, India',
    jobId: 'UX-001',
    image: 'assets/careers/ui-ux.jpg',
    summary:
      'We are looking for a creative and user-focused UI/UX Designer to design intuitive, engaging, and visually appealing digital experiences.',

    responsibilities: [
      'Design user interfaces for web and mobile applications.',
      'Create wireframes, user flows, prototypes, and high-fidelity designs.',
      'Conduct user research and usability testing.',
      'Collaborate with developers and product teams.',
      'Ensure consistency with design systems and brand guidelines.',
      'Prepare design handoff assets.'
    ],

    requiredSkills: [
      'Bachelor’s degree in Design or equivalent experience.',
      '2–5 years of UI/UX design experience.',
      'Strong proficiency in Figma, Adobe XD, or similar tools.',
      'Understanding of UX principles and responsive design.',
      'Good communication and presentation skills.'
    ],

    preferredSkills: [
      'Experience designing SaaS or enterprise applications.',
      'Basic knowledge of HTML/CSS.',
      'Experience with design systems.',
      'Strong portfolio of UI/UX projects.'
    ]
  }

};



  /* ================= LOAD JOB ================= */
  private loadJob(jobId: string | null): void {
    this.job = this.JOB_DETAILS[jobId ?? 'SF-001'];
  }
  applyForJob(jobId: string): void {
    console.log('Applying for job:', jobId);
    // future API / navigation logic
  }
}

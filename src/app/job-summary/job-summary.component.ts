import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/* ================= JOB INTERFACE ================= */
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
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './job-summary.component.html',
  styleUrl: './job-summary.component.scss'
})
export class JobSummaryComponent implements OnInit {

  /* ================= STATE ================= */
  job!: JobDetail;

  applyForm!: FormGroup;
  selectedFileName = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  /* ================= LIFECYCLE ================= */
  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('jobId');
    this.loadJob(jobId);
    this.initApplyForm();
  }

  /* ================= APPLY FORM ================= */
 private initApplyForm(): void {
  this.applyForm = this.fb.group({
    fullName: [
      '',
      [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]
    ],
    phone: [
      '',
      [Validators.required, Validators.pattern(/^[0-9]{10}$/)]
    ],
    experience: [
      '',
      [Validators.required, Validators.min(0), Validators.max(50)]
    ],
    resume: [null, Validators.required]
  });
}


 onFileChange(event: Event): void {
  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    return;
  }

  const file = input.files[0];

  /* ===== VALIDATE TYPE ===== */
  if (file.type !== 'application/pdf') {
    this.applyForm.get('resume')?.setErrors({ fileType: true });
    this.selectedFileName = '';
    return;
  }

  /* ===== VALIDATE SIZE (5MB) ===== */
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    this.applyForm.get('resume')?.setErrors({ fileSize: true });
    this.selectedFileName = '';
    return;
  }

  /* ===== VALID FILE ===== */
  this.selectedFileName = file.name;
  this.applyForm.patchValue({ resume: file });
  this.applyForm.get('resume')?.updateValueAndValidity();
}


  submitForm(): void {
    if (this.applyForm.invalid) {
      this.applyForm.markAllAsTouched();
      return;
    }

    const payload = {
      ...this.applyForm.value,
      jobId: this.job.jobId
    };

    console.log('Application Submitted:', payload);

    // TODO: API integration
  }

  /* ================= LOAD JOB ================= */
  private loadJob(jobId: string | null): void {
    this.job = this.JOB_DETAILS[jobId ?? 'SF-001'];
  }

  /* ================= JOB DATA ================= */
  private JOB_DETAILS: Record<string, JobDetail> = {

    /* ================= NETWORKING LEAD ================= */
    'NET-001': {
      title: 'Networking Lead',
      location: 'Hyderabad, India',
      jobId: 'NET-001',
      image: 'assets/careers/networking-lead.jpg',
      summary:
        'We are seeking a skilled Networking Lead to oversee the design, implementation, and management of enterprise network infrastructure.',
      responsibilities: [
        'Lead LAN, WAN, WLAN, and data center networks.',
        'Monitor network performance and troubleshoot issues.',
        'Ensure network security and compliance.',
        'Manage firewalls, VPNs, routing, and switching.',
        'Plan and execute network upgrades.',
        'Collaborate with cloud and security teams.',
        'Mentor junior engineers.',
        'Maintain network documentation.'
      ],
      requiredSkills: [
        'Bachelor’s degree in IT or related field.',
        '6+ years of networking experience.',
        'Strong TCP/IP and routing knowledge.',
        'Hands-on routing & switching.',
        'Troubleshooting experience.',
        'Good communication skills.'
      ],
      preferredSkills: [
        'Cloud networking experience.',
        'Network security tools knowledge.',
        'Automation tools exposure.',
        'CCNP / CCIE certifications.',
        'Enterprise environment experience.'
      ]
    },

    'NET-002': {
      title: 'Networking Lead',
      location: 'South Windsor, Connecticut',
      jobId: 'NET-002',
      image: 'assets/careers/networking-lead.jpg',
      summary:
        'Lead and manage enterprise networking operations ensuring high availability and security.',
      responsibilities: [
        'Design and maintain enterprise networks.',
        'Troubleshoot complex network issues.',
        'Ensure compliance and security.',
        'Coordinate with global teams.'
      ],
      requiredSkills: [
        '6+ years networking experience.',
        'Strong routing & switching knowledge.'
      ],
      preferredSkills: [
        'Cloud networking.',
        'Enterprise certifications.'
      ]
    },

    /* ================= SALESFORCE DEVELOPER ================= */
    'SF-001': {
      title: 'Salesforce Developer',
      location: 'Hyderabad, India',
      jobId: 'SF-001',
      image: 'assets/careers/salesforce-developer.jpg',
      summary:
        'Design, develop, and maintain scalable Salesforce solutions.',
      responsibilities: [
        'Develop Salesforce customizations.',
        'Build Apex and Lightning components.',
        'Integrate third-party systems.',
        'Perform testing and deployments.'
      ],
      requiredSkills: [
        '3+ years Salesforce experience.',
        'Strong Apex and LWC knowledge.'
      ],
      preferredSkills: [
        'Salesforce certifications.',
        'CI/CD experience.'
      ]
    },

    /* ================= BENCH SALES MANAGER ================= */
    'BSM-001': {
      title: 'Bench Sales Manager (US Staffing)',
      location: 'Hyderabad, India – US Market',
      jobId: 'BSM-001',
      image: 'assets/careers/bench-sales-manager.jpg',
      summary:
        'Manage and market IT consultants for US staffing.',
      responsibilities: [
        'Market bench consultants.',
        'Negotiate contracts.',
        'Build vendor relationships.'
      ],
      requiredSkills: [
        '5+ years US staffing experience.',
        'Strong negotiation skills.'
      ],
      preferredSkills: [
        'Existing vendor network.',
        'ATS tools experience.'
      ]
    },

    'BSM-002': {
      title: 'Bench Sales Manager (US Staffing)',
      location: 'South Windsor, Connecticut',
      jobId: 'BSM-002',
      image: 'assets/careers/bench-sales-manager.jpg',
      summary:
        'Handle bench resources and US market requirements.',
      responsibilities: [
        'Consultant marketing.',
        'Rate negotiations.'
      ],
      requiredSkills: [
        'US staffing experience.'
      ],
      preferredSkills: [
        'Leadership experience.'
      ]
    },

    /* ================= BENCH SALES RECRUITER ================= */
    'BSR-001': {
      title: 'Bench Sales Recruiter (US Staffing)',
      location: 'USA',
      jobId: 'BSR-001',
      image: 'assets/careers/bench-sales-recruiter-us.jpg',
      summary:
        'Market consultants to US staffing clients.',
      responsibilities: [
        'Submit consultant profiles.',
        'Coordinate interviews.'
      ],
      requiredSkills: [
        '2–5 years US staffing experience.'
      ],
      preferredSkills: [
        'Vendor database.'
      ]
    },

    /* ================= SALES & MARKETING HEAD ================= */
    'SMH-001': {
      title: 'Sales & Marketing Head',
      location: 'Hyderabad, India – US Market',
      jobId: 'SMH-001',
      image: 'assets/careers/sales-head.jpg',
      summary:
        'Lead sales and marketing strategies.',
      responsibilities: [
        'Define growth strategy.',
        'Lead teams.'
      ],
      requiredSkills: [
        '8+ years leadership experience.'
      ],
      preferredSkills: [
        'IT services background.'
      ]
    },

    /* ================= DIGITAL MARKETING EXECUTIVE ================= */
    'DM-001': {
      title: 'Digital Marketing Executive',
      location: 'Hyderabad, India',
      jobId: 'DM-001',
      image: 'assets/careers/digital-marketing.jpg',
      summary:
        'Plan and execute digital marketing campaigns.',
      responsibilities: [
        'SEO, SEM, social media.'
      ],
      requiredSkills: [
        'Digital marketing experience.'
      ],
      preferredSkills: [
        'Marketing automation tools.'
      ]
    },

    /* ================= UI/UX DESIGNER ================= */
    'UX-001': {
      title: 'UI/UX Designer',
      location: 'Hyderabad, India',
      jobId: 'UX-001',
      image: 'assets/careers/ui-ux.jpg',
      summary:
        'Design intuitive digital experiences.',
      responsibilities: [
        'UI design.',
        'User research.'
      ],
      requiredSkills: [
        '2–5 years UI/UX experience.'
      ],
      preferredSkills: [
        'SaaS product experience.'
      ]
    }
  };
}

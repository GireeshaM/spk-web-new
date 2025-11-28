import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  public onStartTrial(): void {
    throw new Error('Method not implemented.');
  }
  heading: string = 'Our Product Suite';
  subtitle: string = 'Powerful solutions designed to transform your business';
  // component.ts
  data = [
    {
      title: 'Smart Interior Project Collaboration Platform',
      description:
        'An intelligent collaboration platform that connects customers with professional interior designers for residential, commercial, and layout-based projects. Customers can submit project requests online, while design teams, admins, supervisors, and vendors work together seamlessly through a unified system—ensuring smooth communication, faster approvals, and efficient project execution.',
      images: [
        'https://i.pinimg.com/1200x/b0/0d/8b/b00d8bef45550c2ac16a11ca7915da92.jpg',
        'https://i.pinimg.com/1200x/54/6a/de/546ade663993bd0dc6f09f0efd9f92d3.jpg',
        'https://i.pinimg.com/736x/2b/65/0c/2b650cd34187329b32d94de795c52118.jpg',
        'https://i.pinimg.com/736x/6d/43/76/6d4376d511763b53a823f5ddac2456dc.jpg',
      ],
      features: [
        'Direct Client–Designer Interaction',
        'Simple Online Project Request Submission',
        'Synchronized Communication Across Teams',
        'Residential, Commercial & Layout Projects',
        'Unified Dashboard for Tracking Progress',
      ],
    },
    {
      title: 'AI-Powered Smart Rack Management & Automation',
      description:
        'This AI-driven rack analysis platform converts photos and videos of network racks into structured, highly accurate reports within minutes. It automatically identifies switches, ports, cables, and end-to-end connections, giving you a clear and reliable view of your infrastructure. Ideal for data centers, IT teams, and field technicians, it accelerates audits, enhances troubleshooting, and simplifies ongoing maintenance.',
      image:
        'https://images.surferseo.art/a141e435-f941-4d31-94f2-3d76fdafe1c8.png',
      features: [
        'Rapid Rack Scanning',
        'Hardware Inventory',
        'Cable Mapping',
        'Visual Cable Paths',
        'AI Validation',
        'Auto Reports',
      ],
    },
    {
      title: 'Sprintpark Learning Management System (SLMS)',
      description:
        ' The SLMS app simplifies education management with an easy dashboard, course sign-ups, progress tracking, and secure storage. It also uses AI for personalized course suggestions, offers a chatbot for quick help, and has discussion rooms for student interaction, enhancing the learning experience.',
      images: [
        'https://miro.medium.com/1*k3OU519iKbNHycQXdiRraw.jpeg',
        'https://www.maplelms.com/wp-content/uploads/2021/08/Beige-Green-and-Pink-Blob-Organic-Sale-Quick-Create-Facebook-Cover-1.png',
        'https://www.frontendmatter.com/images/preview/01_learnplus.png',
        'https://static.wixstatic.com/media/0d3339_b28269831ea0488c8dccc1581275dd21~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/0d3339_b28269831ea0488c8dccc1581275dd21~mv2.png',
      ],
      features: [
        'Personalized Experience',
        'Learning Goals',
        'Course Creation',
        'Personalized Dashboard',
        'Progress Tracking',
      ],
    },
    {
      title: 'AI-Driven Code Security & Vulnerability Intelligence Platform',
      description:
        'A next-generation AI-enabled code security platform that integrates Salesforce, GitHub, and OpenAI to scan repositories, detect vulnerabilities, and deliver instant, intelligent fix suggestions. Developers can apply solutions directly through the UI, ensuring fast and seamless remediation.',
      image:
        'https://conformance1.com/wp-content/uploads/2024/05/AI-in-cybersecurity-1024x528.jpg',
      features: [
        'Intelligent AI-Based Threat Detection',
        'Real-Time Vulnerability Fixes',
        'Automated One-Click Resolution',
        'Multi-Technology Support',
        'Repository-Integrated Scanning',
        'Continuous Secure Code Practices',
      ],
    },
  ];

  // optional: formatText method to include features as a bullet list
  public formatText(text: string, features?: string[]): string {
    if (!features || features.length === 0) return text;
    const featuresList = features.map((f) => `<li>${f}</li>`).join('');
    return `${text}<ul>${featuresList}</ul>`;
  }
}

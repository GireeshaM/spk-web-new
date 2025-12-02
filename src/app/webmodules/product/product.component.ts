import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule,RouterLink],
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
        'An intelligent collaboration platform that connects customers with professional interior designers for residential, commercial, and layout-based projects. Customers can submit project requests online, while design teams, admins, supervisors, and vendors work together seamlessly through a unified system ensuring smooth communication, faster approvals, and efficient project execution.',
      images: [
        'assets/products/product 1-a.jpg',
        'assets/products/product 1-b.jpg',
        'assets/products/product 1-c.jpg',
        'assets/products/product 1-d.jpg',
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
      image: 'assets/products/product-2.jpg',
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
      title: 'Smart Learning Management System (SLMS)',
      description:
        ' The SLMS app simplifies education management with an easy dashboard, course sign-ups, progress tracking, and secure storage. It also uses AI for personalized course suggestions, offers a chatbot for quick help, and has discussion rooms for student interaction, enhancing the learning experience.',
      images: [
        'assets/products/product-3-a.jpg',
        'assets/products/product-3-b.jpg',
        'assets/products/product-3-c.jpg',
        'assets/products/product-3-d.jpg',
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
      image: 'assets/products/product-4.jpg',
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

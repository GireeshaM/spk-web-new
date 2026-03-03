import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  /* ================= DEPENDENCIES ================= */
  private readonly route = inject(ActivatedRoute);

  /* ================= HEADER CONTENT ================= */
  public heading: string = 'Our Product Suite';
  public subtitle: string =
    'Powerful solutions designed to transform your business';

  /* ================= STATE ================= */
  public displayedData: any[] = [];

  public data = [
    {
      slug: 'interior-living',
      title: 'Smart Interior Project Collaboration Platform',
      description:
        'An intelligent collaboration platform that connects customers with professional interior designers for residential, commercial, and layout-based projects.',
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
      slug: 'smart-rack',
      title: 'AI-Powered Smart Rack Management & Automation',
      description:
        'This AI-driven rack analysis platform converts photos and videos of network racks into structured, highly accurate reports within minutes.',
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
      slug: 'lms',
      title: 'Smart Learning Management System (SLMS)',
      description:
        'The SLMS app simplifies education management with an easy dashboard, course sign-ups, progress tracking, and secure storage.',
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
      slug: 'code-detector',
      title: 'AI-Driven Code Security & Vulnerability Intelligence Platform',
      description:
        'A next-generation AI-enabled code security platform that integrates Salesforce, GitHub, and OpenAI.',
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

  /* ================= LIFECYCLE ================= */
  public ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('id');

      this.displayedData = slug
        ? this.data.filter((p) => p.slug === slug)
        : this.data;
    });
  }

  /* ================= ACTIONS ================= */
  public onStartTrial(): void {
    // TODO: Implement start trial logic
  }

  /* ================= HELPERS ================= */
  public formatText(text: string, features?: string[]): string {
    if (!features || features.length === 0) {
      return text;
    }

    const featuresList = features.map((f) => `<li>${f}</li>`).join('');
    return `${text}<ul>${featuresList}</ul>`;
  }
}

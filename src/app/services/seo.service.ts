import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

export interface SeoPageMeta {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  title = inject(Title);
  meta = inject(Meta);

  public readonly defaultMeta: SeoPageMeta = {
    title:
      'SprintPark Technologies | AI Solutions, Software Development & Product Engineering',
    description:
      'SprintPark Technologies delivers AI solutions, product engineering, software development, digital transformation, and technology consulting services that help businesses innovate and scale.',
  };

  private readonly pageMeta: Record<string, SeoPageMeta> = {
    home: {
      title: 'SprintPark Technologies | AI Solutions, Software Development & Product Engineering',
      description:
        'SprintPark Technologies delivers AI solutions, product engineering, software development, digital transformation, and technology consulting services that help businesses innovate and scale.',
    },
    about: {
      title: 'About SprintPark Technologies | AI, Engineering & Digital Transformation Experts',
      description:
        'Learn how SprintPark Technologies helps businesses accelerate growth through AI-powered solutions, product engineering, digital transformation, and enterprise technology expertise.',
    },
    services: {
      title: 'AI Solutions, Software Development & Product Engineering Services | SprintPark',
      description:
        "Explore SprintPark's AI solutions, software development, technology consulting, product engineering, project management, and staffing services designed for modern enterprises.",
    },
    industries: {
      title: 'Industry-Specific AI & Digital Transformation Solutions | SprintPark',
      description:
        'SprintPark provides AI solutions, software development, and digital transformation services for healthcare, banking, manufacturing, education, telecom, government, and transportation industries.',
    },
    careers: {
      title: 'Careers at SprintPark Technologies | Join Our AI & Engineering Team',
      description:
        'Join SprintPark Technologies and build innovative AI solutions, enterprise applications, and next-generation digital products with a growing technology team.',
    },
    insights: {
      title: 'Technology Insights, AI Trends & Product Engineering Blogs | SprintPark',
      description:
        'Stay updated with expert insights on artificial intelligence, software development, digital transformation, cloud technologies, cybersecurity, and enterprise innovation.',
    },
    contact: {
      title: 'Contact SprintPark Technologies | AI Solutions & Product Engineering',
      description:
        'Connect with SprintPark Technologies to discuss AI solutions, product engineering, software development, technology consulting, and digital transformation initiatives.',
    },
    itConsulting: {
      title: 'AI Consulting & Digital Transformation Services | SprintPark',
      description:
        'Drive business growth with AI consulting, digital transformation strategies, cloud solutions, enterprise architecture, and technology modernization services.',
    },
    staffing: {
      title: 'Technology Staffing & Engineering Talent Solutions | SprintPark',
      description:
        'Access skilled technology professionals, AI specialists, software engineers, Salesforce experts, and project teams through SprintPark\'s staffing solutions.',
    },
    projectManagement: {
      title: 'Technology Project Management Services | SprintPark Technologies',
      description:
        "Deliver successful technology initiatives with SprintPark's project management services focused on agile execution, digital transformation, and business outcomes.",
    },
    softwareDevelopment: {
      title: 'Custom Software Development & AI Product Engineering | SprintPark',
      description:
        'Build scalable applications, enterprise platforms, AI-powered products, and digital solutions with SprintPark\'s software development and product engineering expertise.',
    },
  };

  public updateMeta(title: string, description: string): void {
    const normalizedTitle = title || this.defaultMeta.title;
    const normalizedDescription =
      description || this.defaultMeta.description;

    this.title.setTitle(normalizedTitle);
    this.meta.updateTag({
      name: 'description',
      content: normalizedDescription,
    });
  }

  public setMetaForPage(pageKey: string): void {
    const meta = this.pageMeta[pageKey];
    if (!meta) {
      return;
    }
    this.updateMeta(meta.title, meta.description);
  }
}

import { Component } from '@angular/core';
import { IndustryUtilComponent } from '../../utilities/industry-util/industry-util.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manufacturing',
  imports: [IndustryUtilComponent, CommonModule],
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.scss',
})
export class ManufacturingComponent {
  public headerBg = 'assets/Industries/wave.svg';
  public itHeader = 'Manufacturing';
  public itHeading = 'Transforming Manufacturing Through Smart Innovation';
  public itContent =
    'Manufacturing faces global challenges like supplier management and regulations. SprintPark helps you turn these into lasting opportunities, aligning strategies with your strengths and goals.';
  public subHeading = 'Driving Innovation in Manufacturing';
  public telecom = 'assets/Industries/manufacturing/manufacturing-hero.jpeg';
  public cards = [
    {
      img: 'assets/Industries/manufacturing/sales-force-integration.png',
      title: 'Salesforce Integration',
      description:
        'Implement Salesforce solutions to optimize supply chain, customer relationships, and sales operations for manufacturing efficiency.',
      link: '/manufacturing/salesforceIntegration',
    },
    {
      img: 'assets/Industries/manufacturing/advanced-data-analytics.png',
      title: 'Advanced Data Analytics',
      description:
        'Leverage data insights for process optimization, predictive maintenance, and improving product quality across your operations.',
      link: '/manufacturing/dataAnalytics',
    },
    {
      title: 'Expert Project Management',
      img: 'assets/Industries/manufacturing/expert-project-management.png',
      description:
        'Oversee manufacturing system implementations to ensure projects are delivered on time and meet business objectives.',
      link: '/manufacturing/projectManagement',
    },
    {
      img: 'assets/Industries/manufacturing/strategic-it-consulting.png',
      title: 'Strategic IT Consulting',
      description:
        'Provide guidance on technology integration, Industry 4.0 adoption, automation, IoT, and IT infrastructure enhancements to boost productivity and innovation.',
      link: '/manufacturing/ITConsulting',
    },
  ];
}
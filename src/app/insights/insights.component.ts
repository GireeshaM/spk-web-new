import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insights',
  imports: [CommonModule],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.scss',
})
export class InsightsComponent {
  public insights = [
    {
      image: '/assets/insights/1.jpg',
      title:
        'Achieving Marketing Excellence: Boost Your Campaigns Using Salesforce Marketing Cloud & Salesforce Data Cloud',
    },
    {
      image: '/assets/insights/2.jpg',
      title: 'Automate your business process through Salesforce Flow Builder',
    },
    {
      image: '/assets/insights/3.jpg',
      title:
        'Demo: How the Salesforce Health Cloud changing Healthcare Industry',
    },
    {
      image: '/assets/insights/4.jpg',
      title:
        'Exploring the Potential of Salesforce Analytics Cloud & Compliance Use-cases in Business Intelligence',
    },
    {
      image: '/assets/insights/5.jpg',
      title:
        'Empowering smart Business Reporting via potential of Salesforce CRM Analytics',
    },
    {
      image: '/assets/insights/6.jpg',
      title:
        'Exploring the trending benefits of Choosing Salesforce Consultations',
    },
  ];
}

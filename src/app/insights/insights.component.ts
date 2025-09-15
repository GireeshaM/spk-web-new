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
      image: 'assets/insights/achieving-marketing-excellence.jpg',
      title:
        'Achieving Marketing Excellence: Boost Your Campaigns Using Synergy of Salesforce Marketing Cloud & Salesforce Data Cloud',
    },
    {
      image: 'assets/insights/automate-business.jpg',
      title: 'Automate your business process through Salesforce Flow Builder',

    },
    {
      image: 'assets/insights/deep-dive-health-cloud.jpg',
      title:
        'Deep Dive into Salesforce Health Cloud changing Healthcare Industry',
    },
    {
      image: 'assets/insights/explore-potential-salesforce.jpg',
      title:
        'Exploring the Potential of Salesforce Analytics Cloud: A Complete Guide to boost Business Intelligence',
    },
    {
      image: 'assets/insights/empovering-smart-business.jpg',
      title:
        'Empowering small Businesses:Unleashing the potential of Salesforce CRM',
    },
    {
      image: 'assets/insights/explore -salesforce-automation.jpg',
      title:
        'Exposing the tempting benefits of choosing Salesforce Customization',
    },
  ];
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-insights',
  imports: [CommonModule, RouterLink],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.scss',
})
export class InsightsComponent {
  public insights = [
    {
      image: 'assets/insights/achieving-marketing-excellence.jpeg',
      title:
        'Achieving Marketing Excellence: Boost Your Campaigns Using Synergy of Salesforce Marketing Cloud & Salesforce Data Cloud',
      route: 'marketing',
    },
    {
      image: 'assets/insights/automate-business.jpeg',
      title: 'Automate your business process through Salesforce Flow Builder',
      route: 'flowBuilder',
    },
    {
      image: 'assets/insights/deep-dive-health-cloud.jpeg',
      title:
        'Demo: How the Salesforce Health Cloud changing Healthcare Industry',
      route: 'automateYourBusinessThroughSalesforceBuilder',
    },
    {
      image: 'assets/insights/explore-potential-salesforce.jpeg',
      title:
        'Exploring the Potential of Salesforce Analytics Cloud & Compliance Use-cases in Business Intelligence',
      route: 'exploringThePotentialOfSalesforceAnalyticsCloud',
    },
    {
      image: 'assets/insights/empovering-smart-business.jpeg',
      title:
        'Empowering smart Business Reporting via potential of Salesforce CRM Analytics',
      route: 'empoweringSmallBusinesses:UnleashingThePotentialOfSalesforceCRM',
    },
    {
      image: 'assets/insights/explore-salesforce-automation.jpeg',
      title:
        'Exploring the trending benefits of Choosing Salesforce Consultations',
      route: 'exposingTheTemptingBenefitsOfChoosingSalesforceCustomization',
    },
  ];
}

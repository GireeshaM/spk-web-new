import { Component } from '@angular/core';
import { IndustryUtilComponent } from '../../utilities/industry-util/industry-util.component';

@Component({
  selector: 'app-education',
  imports: [IndustryUtilComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  public headerBg = 'assets/Industries/wave.svg';
  public itHeader = 'Transforming the Landscape of Higher Education';
  public itContent =
    'Higher education institutions are innovating teaching and leveraging technology to enhance student outcomes.Financial pressures require improved efficiency and strong governance.SprintPark helps institutions balance innovation with operational excellence for a successful future.';
  public subHeading = 'Driving Innovation in Manufacturing';
  public telecom = 'assets/Industries/TelecomIndustries.png';
  public cards = [
    {
      img: 'assets/Industries/DataPrivacy.png',
      title: 'Network Engineering',
      description:
        'We design and maintain strong network systems to support campus connectivity, e-learning, and administrative needs.',
      link: '/education/networkingEngineering',
    },
    {
      img: 'assets/Industries/Automation.png',
      title: 'Project Management',
      description:
        'We oversee key projects like LMS deployment, IT upgrades, and integration of new educational technologies.',
      link: '/education/educationProjectManagement',
    },
    {
      title: 'Data Analytics',
      img: 'assets/Industries/Infrastructure.png',
      description:
        'Using data insights, we analyze student performance to help improve learning outcomes and strategies.',
      link: '/education/dataAnalyticsEducation',
    },
  ];
}

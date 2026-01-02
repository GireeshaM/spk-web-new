import { Component } from '@angular/core';
import { IndustryUtilComponent } from '../../utilities/industry-util/industry-util.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-health-care',
  imports: [IndustryUtilComponent, CommonModule],
  templateUrl: './health-care.component.html',
  styleUrl: './health-care.component.scss',
})
export class HealthCareComponent {
  public headerBg = 'assets/Industries/wave.svg';
  public itHeader = 'HealthCare And Life Sciences';
  public itHeading = 'Innovative Smart Health Solutions Network';
  public itContent =
    'Life sciences and healthcare face risks like IP protection, supply chain issues, and regulatory change. SprintPark delivers tailored solutions to help you manage costs, ensure compliance, grow revenue, and strengthen cybersecurity with confidence.';
  public subHeading = 'Innovating Healthcare Services';
  public telecom =
    'assets/Industries/healthCareAndLifeSciences/healthCare-hero.png';
  public cards = [
    {
      img: 'assets/Industries/healthCareAndLifeSciences/intelligent-automation.png',
      title: 'Intelligent Automation',
      description:
        'Boost operational efficiency and patient care through AI-driven monitoring, diagnostics, personalized medicine, and drug discovery.',
      link: '/industries/healthcare-life-sciences/intelligentinnovation',
    },
    {
      img: 'assets/Industries/healthCareAndLifeSciences/connected-infrastructure.png',
      title: 'Connected Infrastructure',
      description:
        'Design and maintain robust networks and migrate healthcare systems to secure, scalable cloud platforms for seamless access and data management.',
      link: '/industries/healthcare-life-sciences/connectedInfrastructure',
    },
    {
      title: 'Data Security & Compliance',
      img: 'assets/Industries/healthCareAndLifeSciences/data-security-compilance.png',
      description:
        'Protect patient data and systems with strong security protocols, risk assessments, and adherence to healthcare regulations.',
      link: '/industries/healthcare-life-sciences/dataSecurity',
    },
    {
      img: 'assets/Industries/healthCareAndLifeSciences/healthCare-project-delivery.png',
      title: 'Healthcare Project Delivery',
      description:
        'Manage critical healthcare IT projects like EHR implementations and system upgrades ensuring timely and successful delivery.',
      link: '/industries/healthcare-life-sciences/projectDelivery',
    },
    {
      img: 'assets/Industries/healthCareAndLifeSciences/expert-talent-solutions.png',
      title: 'Expert Talent Solutions',
      description:
        'Provide specialized healthcare IT professionals, including analysts, project managers, data scientists, and cybersecurity experts.',
      link: '/industries/healthcare-life-sciences/talentSolutions',
    },
    {
      img: 'assets/Industries/healthCareAndLifeSciences/patient-Centered-Innovation.png',
      title: 'Patient-Centered Innovation',
      description:
        'Drive better outcomes by integrating cutting-edge technologies that enhance patient experience, remote care, and personalized treatment plans.',
      link: '/industries/healthcare-life-sciences/patientInnovation',
    },
  ];
}

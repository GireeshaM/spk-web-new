import { Component } from '@angular/core';
import { IndustryUtilComponent } from '../../utilities/industry-util/industry-util.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transportation',
  imports: [IndustryUtilComponent,CommonModule],
  templateUrl: './transportation.component.html',
  styleUrl: './transportation.component.scss'
})
export class TransportationComponent {
public headerBg='assets/Industries/wave.svg';
public itHeader='Transportation & Logistics: Innovate and Thrive';
 public itContent="SprintPark supports transportation and logistics firms with smart, tailored solutions. We combine strategy and expertise to help you stay competitive and grow in a fast-changing industry.";
 public subHeading='How We Help Transform Transportation & Logistics';
  public  telecom="assets/Industries/TelecomIndustries.png";
  public  cards=[
  {
    img:'assets/Industries/DataPrivacy.png',
    title:'IT Consulting & Digital Solutions',
    description:'We provide tailored digital strategies like TMS, route optimization, and real-time tracking to improve your operations.',
    link:'/#'
  },
  {
    img:'assets/Industries/Automation.png',
    title:'Network Engineering & Connectivity',
     description:'We build and maintain networks for smooth data flow, GPS tracking, and reliable vehicle communication.',
    link:'/#'
  },
   {
    title:'Salesforce & AI Automation',
    img:'assets/Industries/Infrastructure.png',
     description:'We customize Salesforce for customer management and use AI for route planning, maintenance, forecasting, and chatbots.',
    link:'/#'
  },
  
  
 ]
}
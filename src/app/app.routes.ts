import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './insights/insights.component';
import { TeleCommunicationsComponent } from './webmodules/industries/tele-communications/tele-communications.component';
import { IndustryUtilComponent } from './webmodules/utilities/industry-util/industry-util.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ItCommonComponent } from './webmodules/itConsulting/it-common/it-common.component';
import { ProjectManagementComponent } from './webmodules/project-management/project-management.component';
import { IndustrySubUtilComponent } from './webmodules/utilities/industry-sub-util/industry-sub-util.component';
import { TelecommunicationComponent } from './webmodules/industriesSubPages/telecommunication/telecommunication.component';
import { SoftwareServiceUtilComponent } from './webmodules/software-service-util/software-service-util.component';
import { BankingComponent } from './webmodules/industries/banking/banking.component';
import { EducationComponent } from './webmodules/industries/education/education.component';
import { GovtComponent } from './webmodules/industries/govt/govt.component';
import { HealthCareComponent } from './webmodules/industries/health-care/health-care.component';
import { ManufacturingComponent } from './webmodules/industries/manufacturing/manufacturing.component';
import { TransportationComponent } from './webmodules/industries/transportation/transportation.component';
import { staffingComponent } from './webmodules/staffing/staffing.component';
import { transportComponent } from './webmodules/industriesSubPages/transport/transport.component';
import { GovernmentComponent } from './webmodules/industriesSubPages/government/government.component';
import { HealthcareIComponent } from './webmodules/industriesSubPages/healthcare/healthcare.component';
import { BankingIComponent } from './webmodules/industriesSubPages/banking/banking.component';
import { EducationIComponent } from './webmodules/industriesSubPages/education/education.component';
import { ManufacturingIComponent } from './webmodules/industriesSubPages/manufacturing/manufacturing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { footerColor: '#EDE8F6' },
  },
  {
    path: '*', component:PageNotFoundComponent
  },
  
  {
    path: 'insights',
    component: InsightsComponent,
  },
  {
    path: 'industry-util',
    component: IndustryUtilComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: { footerColor: 'rgba(255, 255, 255, 1)' },
  },
  {
    path: 'careers',
    component: CareersComponent,
    data: { footerColor: '#fff' },
  },
  {
    path: 'software-service-util',component:SoftwareServiceUtilComponent,
    data: { footerColor: 'rgba(29, 6, 99, 1)' },
  },
  {
    path: 'it-common',
    component: ItCommonComponent,
    data: { footerColor: 'rgba(29, 6, 99, 1)' },
  },
  {
    path: 'projectManagement',
    component: ProjectManagementComponent,
    data: { footerColor: 'rgba(29, 6, 99, 1)' },
  },
  {
    path: 'industry-sub-util',
    component: IndustrySubUtilComponent,
  },
  {
    path:'staffing',
    component:staffingComponent,
    data: { footerColor: 'rgba(29, 6, 99, 1)' },
  },
   {
    path: 'telecommunications',
    component: TeleCommunicationsComponent,
    data: { footerColor: '#f7f7fc' },
  },
  {
    path: 'government',
    component:GovtComponent,
    data: { footerColor: '#f7f7fc' },
  },
  {
    path:'banking',
    component:BankingComponent,
    data: { footerColor: '#f7f7fc' },
  },
  {
    path:'education',
    component:EducationComponent,
    data: { footerColor: '#f7f7fc' },
  },
  {
    path:'healthCareAndLifeSciences',
    component:HealthCareComponent,
    data: { footerColor: '#f7f7fc' },
  },
  {
    path:'manufacturing',
    component:ManufacturingComponent,
    data: { footerColor: '#f7f7fc' },
  },
  {
    path:'transportationAndLogistics',
    component:TransportationComponent,
    data: { footerColor: '#f7f7fc' },
  },
  //Industries subPages
  {
    path: 'telecommunication/:section',
    component: TelecommunicationComponent
  },
  {
    path:'government/:section',
    component:GovernmentComponent
  },
  {
    path:'transport/:section',
    component:transportComponent
  },
  {
    path:'healthcare/:section',
    component:HealthcareIComponent
  },
  {
    path:'banking/:section',
    component:BankingIComponent
  },
  {
    path:'education/:section',
    component:EducationIComponent
  },
  {
    path:'manufacturing/:section',
    component:ManufacturingIComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

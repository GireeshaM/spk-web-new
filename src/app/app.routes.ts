import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './insights/insights.component';
import { TeleCommunicationsComponent } from './webmodules/industries/tele-communications/tele-communications.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ItCommonComponent } from './webmodules/it-common/it-common.component';
import { ProjectManagementComponent } from './webmodules/project-management/project-management.component';
import { SoftwareServiceUtilComponent } from './webmodules/software-service-util/software-service-util.component';
import { BankingComponent } from './webmodules/industries/banking/banking.component';
import { EducationComponent } from './webmodules/industries/education/education.component';
import { GovtComponent } from './webmodules/industries/govt/govt.component';
import { HealthCareComponent } from './webmodules/industries/health-care/health-care.component';
import { ManufacturingComponent } from './webmodules/industries/manufacturing/manufacturing.component';
import { TransportationComponent } from './webmodules/industries/transportation/transportation.component';
import { staffingComponent } from './webmodules/staffing/staffing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BankingIComponent } from './webmodules/industriesSubPages/banking-i/banking-i.component';
import { GovernmentIComponent } from './webmodules/industriesSubPages/government-i/government-i.component';
import { EducationIComponent } from './webmodules/industriesSubPages/education-i/education-i.component';
import { HealthCareIComponent } from './webmodules/industriesSubPages/health-care-i/health-care-i.component';
import { ManufacturingIComponent } from './webmodules/industriesSubPages/manufacturing-i/manufacturing-i.component';
import { TelecommunicationIComponent } from './webmodules/industriesSubPages/telecommunication-i/telecommunication-i.component';
import { TransportationIComponent } from './webmodules/industriesSubPages/transportation-i/transportation-i.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { footerColor: '#eae8fd' },
  },
  //services
  //it-consulting
   {
    path: 'it-consulting',
    component: ItCommonComponent,
    data: { footerColor: 'rgba(29, 6, 99, 1)' },
   },
  //staffing
   {
    path:'staffing',
    component:staffingComponent,
    data: { footerColor: 'rgba(29, 6, 99, 1)' },
   },
   //project-management
   {
    path: 'project-management',
    component: ProjectManagementComponent,
    data: { footerColor: 'rgba(29, 6, 99, 1)' },
   },
   //software-service
     {
    path: 'software-service',component:SoftwareServiceUtilComponent,
    data: { footerColor: 'rgba(29, 6, 99, 1)' },
     },

     //Industries
     //it& telecommunication
  {
    path: 'itAndTelecommunications',
    component: TeleCommunicationsComponent,
    data: { footerColor: '#f7f7fc' },
  },
  //government
  {
    path: 'government',
    component: GovtComponent,
    data: { footerColor: '#f7f7fc' },
  },
  //healthCrae & life Sciences
  {
    path:'healthCareAndLifeSciences',
    component:HealthCareComponent,
    data: { footerColor: '#f7f7fc' },
  },
  //manufacturing
  {
      path:'manufacturing',
      component:ManufacturingComponent,
      data: { footerColor: '#f7f7fc' },
  },
  //education
    {
    path:'education',
    component:EducationComponent,
    data: { footerColor: '#f7f7fc' },
  },
  //transport & logistics
  {
    path:'transportationAndLogistics',
    component:TransportationComponent,
    data: { footerColor: '#f7f7fc' },
  },
  //banking
  {
    path:'banking',
    component:BankingComponent,
    data: { footerColor: '#f7f7fc' },
  },
  //Industries subPages

  //Telecommunication-subPage
  {
    path: 'telecommunication/:section',
    component: TelecommunicationIComponent,
  },
  //government-subPage
  {
    path: 'government/:section',
    component: GovernmentIComponent,
  },
  //transport-subPage
  {
    path: 'transport/:section',
    component: TransportationIComponent,
  },
  //healthcare & life sciences-subPage
  {
    path: 'healthcare/:section',
    component: HealthCareIComponent,
  },
  //banking-subPage
  {
    path: 'banking/:section',
    component:BankingIComponent,
  },
  //education-subPage
  {
    path: 'education/:section',
    component: EducationIComponent,
  },
  //manufacturing-subPage
  {
    path:'manufacturing/:section',
    component:ManufacturingIComponent
  },

  //careers
   {
    path: 'careers',
    component: CareersComponent,
    data: { footerColor: '#fff' },
  },
  //insights
  {
    path: 'insights',
    component: InsightsComponent,
  },
  //contact-us
   {
    path: 'contact-us',
    component: ContactUsComponent,
    data: { footerColor: 'rgba(255, 255, 255, 1)' },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './insights/insights.component';
import { TeleCommunicationsComponent } from './webmodules/industries/tele-communications/tele-communications.component';
import { IndustryUtilComponent } from './webmodules/utilities/industry-util/industry-util.component';
import { CareersComponent } from './careers/careers.component';
import { SoftwareServiceUtilComponent } from './webmodules/utilities/software-service-util/software-service-util.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ItCommonComponent } from './webmodules/itConsulting/it-common/it-common.component';
import { ProjectManagementComponent } from './webmodules/project-management/project-management.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,data: { footerColor: '#EDE8F6' }
  },
  {
    path: 'insights',
    component: InsightsComponent,
  },
  {
    path: 'telecommunications',
    component: TeleCommunicationsComponent,data: { footerColor: '#f7f7fc' }
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
    component: ContactUsComponent,data: { footerColor: 'rgba(255, 255, 255, 1)' }
  },
  {
    path: 'careers',
    component: CareersComponent,data: {footerColor: '#fff' }
  },
  {
    path: 'software-service-util',
    component: SoftwareServiceUtilComponent,data: { footerColor: 'rgba(29, 6, 99, 1)' }
  },
  {
    path: 'it-common',
    component: ItCommonComponent,data: { footerColor: 'rgba(29, 6, 99, 1)' }
  },
  {
    path:'project-management',component:ProjectManagementComponent,
  }
];

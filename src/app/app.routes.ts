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

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'insights',
    component: InsightsComponent,
  },
  {
    path: 'telecommunications',
    component: TeleCommunicationsComponent,
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
  },
  {
    path: 'careers',
    component: CareersComponent,
  },
  {
    path: 'software-service-util',
    component: SoftwareServiceUtilComponent,
  },
  {
    path: 'it-common',
    component: ItCommonComponent,
  },
];

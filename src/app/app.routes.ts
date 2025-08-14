import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { TeleCommunicationsComponent } from './webmodules/Industries/tele-communications/tele-communications.component';
import { InsightsComponent } from './insights/insights.component';
import { IndustryUtilComponent } from './webmodules/utilities/industry-util/industry-util.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'telecommunications',component:TeleCommunicationsComponent
    },
    {
        path:'insights',component:InsightsComponent
    },
    {
        path:'industry-util',component:IndustryUtilComponent
    },
    {
        path: 'contact-us', loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent)
    }
];

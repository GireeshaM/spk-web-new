import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeleCommunicationsComponent } from './webmodules/industries/tele-communications/tele-communications.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'industries',
    component: TeleCommunicationsComponent,
  },
];

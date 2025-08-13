import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
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
=======

export const routes: Routes = [  { path: '', component: HomeComponent }, { path: '**', redirectTo: '' },];
>>>>>>> 1aea208467cfcb774cac93a43519200e95afd9eb

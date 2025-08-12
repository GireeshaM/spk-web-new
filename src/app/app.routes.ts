import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './insights/insights.component';
 
export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'insights',component:InsightsComponent
    }
];
 
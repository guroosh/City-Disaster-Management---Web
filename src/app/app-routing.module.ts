import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from './map/map.component'
import {RegistrationComponent} from './registration/registration.component'
import {ReportDisasterComponent} from './disaster-report/report-disaster.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import {RescueComponent} from './rescue/rescue.component';
import {LoginComponent} from './login/login.component';
import {DisasterVerificationComponent} from './disaster-verification/disaster-verification.component';

const routes: Routes = [
  {
    path:'map',
    component: MapComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  },
  {
    path:'disasterReport',
    component: ReportDisasterComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'rescue',
    component: RescueComponent
  },
  {
    path:'disasterVerification',
    component: DisasterVerificationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from './map/map.component'
import {RegistrationComponent} from './registration/registration.component'
import {ReportDisasterComponent} from './disaster-report/report-disaster.component'


const routes: Routes = [
  {
    path:'',
    component: MapComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  },
  {
    path:'disasterReport',
    component: ReportDisasterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

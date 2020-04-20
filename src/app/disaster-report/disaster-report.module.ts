import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDisasterComponent } from './report-disaster.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {GoogleMapsModule} from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [ReportDisasterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    GoogleMapsModule,
    AgmCoreModule
  ]
})
export class DisasterReportModule { }

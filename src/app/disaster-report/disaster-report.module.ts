import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDisasterComponent } from './report-disaster.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {GoogleMapsModule} from '@angular/google-maps';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'

import {MatSelectModule} from '@angular/material/select'
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ReportDisasterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    GoogleMapsModule,
    MatSortModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ]
})
export class DisasterReportModule { }

import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatIconModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { 

}

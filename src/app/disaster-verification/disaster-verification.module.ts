import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisasterVerificationComponent } from './disaster-verification.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [DisasterVerificationComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DisasterVerificationModule { }

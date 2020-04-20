import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { from } from 'rxjs';
//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    //AgmCoreModule
  ]
})
export class MapModule { }

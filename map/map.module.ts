import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map.component';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule
  ],
  providers: [],
  bootstrap: [MapComponent]
})
export class MapModule { }

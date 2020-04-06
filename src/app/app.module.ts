import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MapModule} from './map/map.module';
import {RegistrationModule} from './registration/registration.module';
import  {DisasterReportModule} from './disaster-report/disaster-report.module';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  exports: [MatSidenavModule],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MapModule,
    RegistrationModule,
    DisasterReportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

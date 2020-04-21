import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

export interface menu {
  name : string;
  icon : string;
  url:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'rscd-web';
  reason = '';
  @ViewChild('sidenav') sidenav: MatSidenav;
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  menuList : menu[] = [ 
    {name:"Dashboard", icon:"menu", url:"/"},
    {name:"Login", icon:"menu", url:"/login"},
    { name:"Disaster Report", icon:"menu", url:"/disasterReport"},
    {name:"Registration", icon:"menu", url:"/registration"},
    { name:"Rescue Team", icon:"menu", url:"/rescue"},
    { name:"Settings", icon:"settings", url:"/"},
    { name:"Logout", icon:"logout", url:"/"}]
}

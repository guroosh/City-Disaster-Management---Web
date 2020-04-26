import {Component, ViewChild,OnInit,AfterContentInit,AfterViewInit,Input} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
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



export class AppComponent  implements OnInit,AfterContentInit,AfterViewInit{
  title = 'rscd-web';
  reason = '';
  opened = "true";
  //@Input('sidenav') sidenav: MatSidenav;
  //@Input('toolbar') toolbar: MatToolbar;
  
  
  @ViewChild('sidenav') sidenav: MatSidenav;
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  
  

  menuList : menu[] = [ 
    {name:"Dashboard", icon:"menu", url:"/"},
    { name:"Disaster Report", icon:"menu", url:"/disasterReport"},
    {name:"Registration", icon:"menu", url:"/registration"},
    { name:"Rescue Team", icon:"menu", url:"/rescue"},
    { name:"Logout", icon:"logout", url:"/"}]

  ngOnInit(): void {
    
  }
  ngAfterContentInit() {
  }
  ngAfterViewInit(){

    //this.sidenav.open();
  }
}

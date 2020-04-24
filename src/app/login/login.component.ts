import { Component, OnInit, ViewChild ,AfterViewInit, Input} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {AppComponent} from '../app.component';

export interface dropDown{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit {
  //@Input('sidenav') sidenav: MatSidenav;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor() { }

  ngOnInit(): void {

    var menu_bar = document.getElementById('menu_bar');
    menu_bar.style.display = 'none';
    //var side_menu = document.getElementById('side_menu');
    //side_menu.at .opened = 'false';
    
  
    //this.sidenav.close();
   // @Input() sidenav
  }

  ngAfterViewInit(){
    //alert(this.sidenav);
    
  }

}

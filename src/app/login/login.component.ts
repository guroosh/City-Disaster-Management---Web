import { Component, OnInit,ContentChild} from '@angular/core';
//import {MatSidenav} from '@angular/material/sidenav';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {MatSidenav} from '@angular/material/sidenav';
//import { AppComponent } from '../app.component';

export interface dropDown{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submission;
  //@Input('sidenav') sidenav: MatSidenav;
  //@ViewChild('sidenav') sidenav: MatSidenav;
  @ContentChild('sidenav') sidenav: MatSidenav;

  constructor(public http: HttpClient,private formBuilder: FormBuilder) { 
    this.submission = this.formBuilder.group({
      UserName: 'tester09@mail.com',
      Password: '123'
    });
  }


  ngOnInit(): void {

    //var menu_bar = document.getElementById('menu_bar');
    //menu_bar.style.display = 'none';
    
    //var side_menu = document.getElementById('side_menu');
    //side_menu.at .opened = 'false';
    
  
    //this.sidenav.close();
   // @Input() sidenav
   const toolbar = document.getElementById('toolbar');
   toolbar.setAttribute('style', 'display:none');
   
  }

  ngAfterViewInit():void{
    //alert(this.sidenav);
    //this.sidenav.close();
    //this.sidenav = document.getElementById('side_menu');

  }
  
  onSubmit(user):void{

    let headers = new HttpHeaders({'Content-Type':'application/json',
    'RSCD-Token':'DynattralL1TokenKey12345',
    'RSCD-JWT-Token':'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJc3N1ZXIiOiJEeW5hdHRyYWwgVGVjaCIsIklzc3VlZFRvIjoiWWVra28iLCJFbXBsb3llZUNvZGUiOiJFTVAyNTM1NjciLCJQYXlsb2FkS2V5IjoiMTJkMDhlYjBhYTkyYjk0NTk2NTU2NWIyOWQ1M2FkMWYxNWE1NTE0NGVkMDcxNGFjNTZjMzQ2NzdjY2JjYjQwMCIsIklzc3VlZEF0IjoiMTktMDQtMjAxOSAyLjU0LjIzIFBNIiwiQ2hhbm5lbCI6InNpdGUifQ.Rf7szVWkGiSXHXfGW-xj4TRIw3VQRAySrt9kaEk1kuM'});
    let data={
      "LoginId":user.UserName,
      "Password":user.Password,
      "Channel":""
    }
    console.log(data)

    let options = { headers : headers} 

    this.http.post('http://52.212.233.94:8080/login/login', data,options).subscribe(
      (response) => {
        //page.success();
        alert("Welcome.");
        location.href = "/disasterReport";
      },
      (error) => {
        alert("The login is failed.");
      }
    )

  }
}

import { Component, OnInit } from '@angular/core';
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
   hide ='true';
  constructor() { }

  ngOnInit(): void {
  }

}

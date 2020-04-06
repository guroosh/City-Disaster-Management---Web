import { Component, OnInit } from '@angular/core';
export interface dropDown{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  departments : dropDown[] = [
    {value: 'medical', viewValue:'Medical'},
    {value:'traffic',viewValue:'Traffic'},
    {value:'traffic',viewValue:'Traffic'},
    {value:'traffic',viewValue:'Traffic'}, 
  ];

  roles : dropDown[] = [
    {value: 'medical', viewValue:'Medical'},
    {value:'traffic',viewValue:'Traffic'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

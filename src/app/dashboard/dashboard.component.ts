import { Component, OnInit } from '@angular/core';
export interface dropDown{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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

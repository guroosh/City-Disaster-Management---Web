import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import{HttpClient} from '@angular/common/http';
export interface dropDown{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-report-disaster',
  templateUrl: './report-disaster.component.html',
  styleUrls: ['./report-disaster.component.scss'],animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ReportDisasterComponent implements OnInit {
  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  constructor() { 
  }

  ngOnInit(): void {
  }
  departments : dropDown[] = [
    {value: 'medical', viewValue:'Medical'},
    {value:'traffic',viewValue:'Traffic'},
    {value:'traffic',viewValue:'Traffic'},
    {value:'traffic',viewValue:'Traffic'}, 
  ];

  deallocate(event:Event) : void
  {
    let elementId: string = (event.target as Element).id;
    console.log(elementId);
  }

  displayedColumns: string[] = ['Reference Code', 'First Name', 'Last Name', 'Department', 'Badge Id', 'Email Id', 'Releive'];
  dataSource = ELEMENT_DATA;

  

  

}

export interface Name{
  FirstName: String;
  LastName: String;
}


export interface AdminUserDetails_minimal {  
  ReferenceCode: String;
  Name: Name;
  Department: String;
  BadgeId: String;
  EmailId:String;
}

export interface ColoumnDetail{
  Name:string;
  Id:string;
}

const ELEMENT_DATA : AdminUserDetails_minimal[] = [
  {
    Department:'Law',
    BadgeId:'456478',
    EmailId:'test@123',
    ReferenceCode:'USR1234',
    Name: {FirstName: 'test', LastName: 'test'}
  }
];



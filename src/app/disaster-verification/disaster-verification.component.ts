import { Component,AfterViewInit, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-disaster-verification',
  templateUrl: './disaster-verification.component.html',
  styleUrls: ['../map/map.component.scss']
})
export class DisasterVerificationComponent implements OnInit,AfterViewInit {
  @ViewChild("mapContainer") gmap: ElementRef;
  map: google.maps.Map;
  params:Params;
  submission;
  lat;
  lng;
  code;
  constructor(private activatedRoute:ActivatedRoute,public http: HttpClient,private formBuilder: FormBuilder) { 
    this.activatedRoute.queryParams.subscribe(
        (params:Params)=>{
            this.params = params;
        }
      );
    this.lat = this.params['lat'];
    this.lng = this.params['lng'];
    this.code = this.params['code'];
    this.submission = this.formBuilder.group({
        isTrue: true,
        radius: '10',
        landmark: '',
        scale: 'High',
        medical: true,
        traffic: true,
        fire: true,
        other: ''
    });
  }

  ngAfterViewInit(){

  }

  ngOnInit(){
/*
    var center = {lat:53.3498, lng:-6.2603};
    var radius = 150000;
    var zoom = 13;
    var map = new google.maps.Map(document.getElementById('map'), {zoom: zoom, center: center});
    var disaster_markers = [];
    var disaster_circles = [];
    var rescue_markers = [];
*/

    document.getElementById('referenceCode').innerHTML = this.code;
    document.getElementById('latitude').innerHTML = this.lat;
    document.getElementById('longitude').innerHTML = this.lng;


  }

  onSubmit(submission):void{
    var now = new Date();
    var time = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+' '+now.getDate()+'-'+now.getMonth()+'-'+now.getFullYear();
    let headers = new HttpHeaders({'Content-Type':'application/json',
    'RSCD-Token':'DynattralL1TokenKey12345',
    'RSCD-JWT-Token':'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJc3N1ZXIiOiJEeW5hdHRyYWwgVGVjaCIsIklzc3VlZFRvIjoiWWVra28iLCJFbXBsb3llZUNvZGUiOiJFTVAyNTM1NjciLCJQYXlsb2FkS2V5IjoiMTJkMDhlYjBhYTkyYjk0NTk2NTU2NWIyOWQ1M2FkMWYxNWE1NTE0NGVkMDcxNGFjNTZjMzQ2NzdjY2JjYjQwMCIsIklzc3VlZEF0IjoiMTktMDQtMjAxOSAyLjU0LjIzIFBNIiwiQ2hhbm5lbCI6InNpdGUifQ.Rf7szVWkGiSXHXfGW-xj4TRIw3VQRAySrt9kaEk1kuM'});
    let data={
      "ReferenceCode":this.code,
      "Latitude":parseFloat(this.lat),
      "Longitude":parseFloat(this.lng),
      "Landmark":submission.landmark,
      "VerifiedTime":time,
      "VerifiedBy":localStorage.getItem('userName'),
      "IsInfoTrue":submission.isTrue,
      "Radius":parseFloat(submission.radius),
      "ScaleOfDisaster":submission.scale,
      "MedicalAssistanceRequired":submission.medical,
      "TrafficPoliceAssistanceRequired":submission.traffic,
      "FireBrigadeAssistanceRequired":submission.fire,
      "OtherResponseTeamRequired":submission.other
    }
    console.log(data)

    let options = { headers : headers} 

    this.http.post('http://52.212.233.94:8080/services/ds/DisasterReport/verifiedDisaster', data,options).subscribe(
      (response) => {
        alert("Verification is successful.");
        location.href = "/disasterReport";
      },
      (error) => {
        //alert("Verification is failed.");
        alert(JSON.stringify(error));
      }
    )
  }

}

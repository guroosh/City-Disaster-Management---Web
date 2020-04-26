import { Component,AfterViewInit, OnInit, ViewChild, ElementRef  } from '@angular/core';
//import {Paho} from 'ng2-mqtt/mqttws31';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-report-disaster',
  templateUrl: './report-disaster.component.html',
  styleUrls: ['./report-disaster.component.scss']
})


export class ReportDisasterComponent implements OnInit,AfterViewInit {
  @ViewChild("mapContainer") gmap: ElementRef;
  map: google.maps.Map;

  constructor(public http: HttpClient) {

   }

  ngOnInit(): void {

  }

  ngAfterViewInit(){


    var center = {lat:53.3498, lng:-6.2603};
    var map = new google.maps.Map(document.getElementById('disaster_map'), {zoom: 13, center: center});
    var markers = [];
    var circles = [];

    let headers = new HttpHeaders({'Content-Type':'application/json',
    'RSCD-Token':'DynattralL1TokenKey12345',
    'RSCD-JWT-Token':'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJc3N1ZXIiOiJEeW5hdHRyYWwgVGVjaCIsIklzc3VlZFRvIjoiWWVra28iLCJFbXBsb3llZUNvZGUiOiJFTVAyNTM1NjciLCJQYXlsb2FkS2V5IjoiMTJkMDhlYjBhYTkyYjk0NTk2NTU2NWIyOWQ1M2FkMWYxNWE1NTE0NGVkMDcxNGFjNTZjMzQ2NzdjY2JjYjQwMCIsIklzc3VlZEF0IjoiMTktMDQtMjAxOSAyLjU0LjIzIFBNIiwiQ2hhbm5lbCI6InNpdGUifQ.Rf7szVWkGiSXHXfGW-xj4TRIw3VQRAySrt9kaEk1kuM'});
    let options = { headers : headers} 

    this.http.get('http://52.212.233.94:8080/services/ds/DisasterReport/getDisasterList', options).subscribe(
      (response) => {
        //page.success();
        var result = JSON.parse(JSON.stringify(response));
        //alert(result.actionResponse.statusCode);
        var disasterList = result.disasterReportList;
        disasterList.forEach(
          function(disaster){
            createTable(disaster,map);
          }
        );
        //console.log(disasterList.length);
      },
      (error) => {
        alert("Failed.");
        //console.log(error);
      }
    )


/*
 var mqtt = new Paho.MQTT.Client('broker.hivemq.com',8000,"ASE_Frontend");
 var options = {
  timeout: 3,
  onSuccess: onConnect,
  onFailure: onFailure,
  };
  mqtt.onMessageArrived = onMessageArrived;
  mqtt.connect(options);


  function onConnect() {
    //alert('connected');
    mqtt.subscribe('disaster',1);
  }
  function onFailure(){
    alert('connection is failed.');
  }

  function onMessageArrived(r_message){
    //alert(r_message.payloadString);
    var root = document.getElementById('disaster_list');
    root.innerHTML = '';

    markers.forEach(
      function(marker){
        marker.setMap(null);
      }
    );

    circles.forEach(
      function(circle){
        circle.setMap(null);
      }
    )

    markers.length = 0;
    circles.length = 0;

    var result = JSON.parse(r_message.payloadString);
    var list = document.getElementById('disaster_list');
    list.style.height = (result.disasters.length*230).toString()+'px';
    result.disasters.forEach(
      function(disaster){
        //alert(disaster.name);
        createTable(disaster,map);
      }
    );
  }
*/
/*
    function createDisaster(id,name,status,scale,radius,time,user,location,lat,lng){
      var disaster = {
        id:id,
        name:name,
        status:status,
        scale:scale,
        radius:radius,
        time:time,
        user:user,
        location:location,
        lat:lat,
        lng:lng
      }
      return disaster;
    }
*/
    
    function createTable(disaster,map){
      var root = document.getElementById('disaster_list');
      var html = '<div style="height:230px"><table width="100%">';
      html = addGrid(html,"Disaster Id",disaster.referenceCode);
      html = addGrid(html,"Disaster Type",disaster.disasterType);
      html = addGrid(html,"Reported By",disaster.reportedBy.firstName+disaster.reportedBy.lastName);
      html = addGrid(html,"Reporter Id",disaster.reporterId);
      html = addGrid(html,"Reported Time",disaster.ReportedTime);
      html = addGrid(html,"Is Verified",disaster.isVerfied);
      html = addGrid(html,"Is Closed",disaster.isClosed);
      html += '</table></div>';
      root.innerHTML = root.innerHTML + html;

    
      var circle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: {lat:disaster.lat,lng:disaster.lng},
        radius: disaster.radius
      });
      circles.push(circle);
      var marker = new google.maps.Marker(
        {
            position: {lat:disaster.lat,lng:disaster.lng}, 
            map: map, 
            label: {
                text: disaster.name,
                color: '#AA0000',
                fontSize: '30px'
            },
            icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            }
        }
      );
      markers.push(marker);
    }

    function addGrid(html,title,value){
      html+='<tr align="left">';
      html+='<th>'+title+'</th>';
      html+='<th>'+value+'</th>';
      html+='</tr>';
      return html;
    }
  }

}

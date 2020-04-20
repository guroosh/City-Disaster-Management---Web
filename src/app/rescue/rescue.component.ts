import { Component,AfterViewInit, OnInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-rescue',
  templateUrl: './rescue.component.html',
  styleUrls: ['../map/map.component.scss']
})
export class RescueComponent implements OnInit,AfterViewInit {
  @ViewChild("mapContainer") gmap: ElementRef;
  map: google.maps.Map;

  constructor() { }

  ngOnInit(): void {

    //this.center = {lat:53.3498,lng:-6.2603};


  }

  ngAfterViewInit(){
    var disaster_zone = [53.35,-6.26,500];
  
  //var start = {lat:53.36,lng:-6.28};
  //var end = {lat:53.34,lng:-6.24};
  var center = {lat:53.3498, lng:-6.2603};
  var radius = 150000;
  var zoom = 13;
  var service = new google.maps.DirectionsService;
  var renderer = new google.maps.DirectionsRenderer;

  var map = new google.maps.Map(document.getElementById('map'), {zoom: zoom, center: center});
  //var start_marker = new google.maps.Marker({position: start, map: map});
  //var end_marker = new google.maps.Marker({position: end, map: map}); 

  var circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: {lat:disaster_zone[0],lng:disaster_zone[1]},
    radius: disaster_zone[2]
  });

  }

}

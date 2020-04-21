import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @ViewChild("mapContainer") gmap: ElementRef;
  map: google.maps.Map;
  marker:{
    lat:-6,
    lng:-6
  }
  center: google.maps.LatLngLiteral;
  zoom = 13;


  constructor() {

  }
  ngOnInit(){
    this.center = {lat:53.3498,lng:-6.2603};
  }
  ngAfterViewInit() { 
    //const coordinates = new google.maps.LatLng(40, 73); 
    //this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions); 
    //this.marker = new google.maps.Marker({position:coordinates,map:this.map});
  }
}




   //Coordinates to set the center of the map
   //coordinates = new google.maps.co

  //  mapOptions: google.maps.MapOptions = {
  //    center: this.coordinates,
  //    zoom: 8
  //  };
 
  /*
  //  //Default Marker
  marker = new google.maps.Marker({
    position: {lat:40,lng:-73},
    map: this.map,
    title: "Hello World!"
  });
 */



 
  //  mapInitializer(): void {
  //    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
 
  //    //Adding Click event to default marker
  //    this.marker.addListener("click", () => {
  //      const infoWindow = new google.maps.InfoWindow({
  //        content: this.marker.getTitle()
  //      });
  //      infoWindow.open(this.marker.getMap(), this.marker);
  //    });
 
  //    //Adding default marker to map
  //    this.marker.setMap(this.map);
 
  //  }

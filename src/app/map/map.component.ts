import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 40.73061;
  lng = -73.935242;
  constructor() { }


   //Coordinates to set the center of the map
   //coordinates = new google.maps.co

  //  mapOptions: google.maps.MapOptions = {
  //    center: this.coordinates,
  //    zoom: 8
  //  };
 
  //  //Default Marker
  //  marker = new google.maps.Marker({
  //    position: this.coordinates,
  //    map: this.map,
  //    title: "Hello World!"
  //  });
 
   ngOnInit(): void {
    //  this.mapInitializer();
   }
 
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

}

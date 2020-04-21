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

  ngAfterViewInit(){

  }

  ngOnInit(){
    var disasters = [
        {lat:53.35,lng:-6.26,radius:500,name:'Fire 1'},
        {lat:53.32,lng:-6.25,radius:200,name:'Fire 2'},
        {lat:53.34,lng:-6.27,radius:300,name:'Fire 3'}
    ];
  
    var rescues = [
        {lat:53.37,lng:-6.24,name:'Team A'},
        {lat:53.33,lng:-6.25,name:'Team B'},
        {lat:53.335,lng:-6.265,name:'Team C'}
    ];

    var center = {lat:53.3498, lng:-6.2603};
    var radius = 150000;
    var zoom = 13;
    var map = new google.maps.Map(document.getElementById('map'), {zoom: zoom, center: center});

    rescues.forEach(
        function(rescue){
            var marker = new google.maps.Marker(
                {
                    position: {lat:rescue.lat,lng:rescue.lng}, 
                    map: map, 
                    label: {
                        text: rescue.name,
                        color: '#00AA00',
                        fontSize: '30px'
                    },
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                    }
                }
            );
        }
    );

    disasters.forEach(
        function(disaster){

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

            var circle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.20,
                map: map,
                center: {lat:disaster.lat,lng:disaster.lng},
                radius: disaster.radius,
            });

        }
    );

  }

}

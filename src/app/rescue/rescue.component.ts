import { Component,AfterViewInit, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {Paho} from 'ng2-mqtt/mqttws31';

@Component({
  selector: 'app-rescue',
  templateUrl: './rescue.component.html',
  styleUrls: ['../map/map.component.scss']
})
export class RescueComponent implements OnInit,AfterViewInit {
  @ViewChild("mapContainer") gmap: ElementRef;
  map: google.maps.Map;
    coloArray :string[] = ['#008000','#0000FF','#008000','#0000FF']
  constructor() { }

  ngAfterViewInit(){

  }

  ngOnInit(){
    console.log("map");
    var center = {lat:53.3498, lng:-6.2603};
    var radius = 150000;
    var zoom = 13;
    var map = new google.maps.Map(document.getElementById('map'), {zoom: zoom, center: center});
    var disaster_markers = [];
    var disaster_circles = [];
    var rescue_markers = [];

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
       mqtt.subscribe('RSCD/Message/Disaster/Verified',1);
     }
     function onFailure(){
       alert('connection is failed.');
     }
     function onMessageArrived(r_message){
        //alert(r_message.payloadString);
        disaster_markers.forEach(
          function(marker){
            marker.setMap(null);
          }
        );
    
        disaster_circles.forEach(
          function(circle){
            circle.setMap(null);
          }
        )

        rescue_markers.forEach(
            function(marker){
                marker.setMap(null);
            }
        )
    
        disaster_markers.length = 0;
        disaster_circles.length = 0;
        rescue_markers.length = 0;

        


        var result = JSON.parse(r_message.payloadString);
        var marker = new google.maps.Marker(
            {
                position: {lat:result.Latitude,lng:result.Longitude}, 
                map: map, 
                label: {
                    text: result.ReferenceCode,
                    color: '#AA0000',
                    fontSize: '20px'
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
            fillColor: '#0000FF',
            fillOpacity: 0.20,
            map: map,
            center: {lat:result.Latitude,lng:result.Longitude},
            radius: result.Radius,
        });
        disaster_markers.push(marker);
        disaster_circles.push(circle);
        
for(var index  in result.ExitEntryRoutes){
    var color  = '#FF0000';
    if(Number(index)%2 == 0)
    {
        color = '#008000';
    }
        var line = new google.maps.Polyline({
            path : result.ExitEntryRoutes[index],
            strokeColor : color,
            strokeOpacity:0.8,
            strokeWeight:2,
            map: map
        });  
}}
         
         
    /*

    result.rescues.forEach(
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
                rescue_markers.push(marker);
            }
        )

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
*/
  }

}

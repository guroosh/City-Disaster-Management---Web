import { Component,AfterViewInit, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {Paho} from 'ng2-mqtt/mqttws31';

@Component({
  selector: 'app-report-disaster',
  templateUrl: './report-disaster.component.html',
  styleUrls: ['./report-disaster.component.scss']
})
export class ReportDisasterComponent implements OnInit,AfterViewInit {
  @ViewChild("mapContainer") gmap: ElementRef;
  map: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

/*
    var ip = 'tcp://broker.hivemq.com';
    var port = 1883;
    var mqtt = require('mqtt');
    
    var map_topic = 'disaster';
    var opt = {
        port:port,
        clientId: 'website'
    }
    var client = mqtt.connect(ip,opt)
    //client.publish(map_topic, 'this is mqtt.');
    
    client.on("connect",function(){	
      console.log("connected  "+ client.connected);
      })
    client.subscribe(map_topic)
  
    client.on('message', function(topic,msg){
      var message = 'received:'+topic+'-'+msg.toString()
      console.log(message);
      alert(message);
  });
*/
var center = {lat:53.3498, lng:-6.2603};
var map = new google.maps.Map(document.getElementById('disaster_map'), {zoom: 13, center: center});
var markers = [];
var circles = [];

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

  /*
    var disasters = [];
    disasters.push(createDisaster('D1','Fire 1','Closed','Medium',800,'21/4/2020','Amrish','Spire',53.35,-6.2603));
    disasters.push(createDisaster('D2','Fire 2','Closed','Medium',400,'21/4/2020','Amrish','Spire',53.34,-6.259));

    disasters.forEach(
      function(disaster){
        createTable(disaster,map);
      }
    );
*/

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

    function createTable(disaster,map){
      var root = document.getElementById('disaster_list');
      var html = '<div style="height:230px"><table width="100%">';
      html = addGrid(html,"Disaster Id",disaster.id);
      html = addGrid(html,"Disaster Name",disaster.name);
      html = addGrid(html,"Status",disaster.status);
      html = addGrid(html,"Scale",disaster.scale);
      html = addGrid(html,"Radius",disaster.radius+' m');
      html = addGrid(html,"Location",disaster.location);
      html = addGrid(html,"Reported at",disaster.time);
      html = addGrid(html,"Reported by",disaster.user);
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

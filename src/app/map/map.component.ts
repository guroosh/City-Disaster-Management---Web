import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './map.component.html',
  //styleUrls: ['./map.component.css']
})
export class MapComponent {
  title = 'map';
  lat = 53.3498;
  lng = -6.2603;
  topic = 'desaster';

  constructor() {

 
    const mqtt = require('mqtt')
    var map_topic = 'desaster';
    var opt = {
        port:1884,
        clientId: 'website'
    }
    const client = mqtt.connect('mqtt://127.0.0.1',opt)
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

  }
}

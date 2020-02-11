import { Component } from '@angular/core';

import {Subscription} from 'rxjs';
import {IMqttMessage, MqttService} from 'ngx-mqtt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'map';
  lat = 53.3498;
  lng = -6.2603;
  //lat = 0;
  //lng = 0;
  topic = 'my/topic'

  private subscription: Subscription;

  public message: string;

  constructor(private _mqttService: MqttService) {
    
    this.subscription = this._mqttService.observe(this.topic).subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
      alert(this.message)
    });

    this.unsafePublish(this.topic,'10');
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }
  
}

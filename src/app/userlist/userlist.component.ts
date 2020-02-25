<<<<<<< HEAD
import { Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './userlist.component.html',
    //styleUrls: ['./map.component.css']
  })
  export class UserListComponent {
    title = 'userlist';
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
  
=======
﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '@/_services';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  ngOnInit(){
      
  }
/*
  users: User[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers()
      .subscribe( data => {
        //this.users = data.result;
      });
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
*/
}
>>>>>>> refs/remotes/origin/master

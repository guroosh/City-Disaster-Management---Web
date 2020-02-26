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
    }
  }
  

import { Component} from '@angular/core';
import { AdminUser } from '@/_models';

@Component({
    selector: 'app-root',
    templateUrl: './userlist.component.html',
    //styleUrls: ['./map.component.css']
  })
/*
  function deleteUser2(){
    alert('ooop');
  }
*/
  export class UserListComponent {
    title = 'userlist';

    userList = [
      new AdminUser('aaa','bbb','ccc','c','c','c'),
      new AdminUser('aa333','bbb','ccc','c','c','c'),
      new AdminUser('aaa','bb331b','ccc','c','c','c'),
      new AdminUser('aaa','bbb','ccc','c','c','c000')
    ];    
  
    constructor() {

    }

    ngOnInit(){

      function deleteUser(email){
        alert('delete '+email);
      };
      function editUser(email){
        alert('edit '+email);
      };
    }

  }
  

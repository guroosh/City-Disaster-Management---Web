import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    register(user: User) {

        //alert(user.Role);
        var jsonString = '{"Name":{"FirstName":"Shubhang","LastName":"Kukreti"},"EmailId":"kukretis@tcd.ie","Department":"Police","BadgeId":"POL123","Role":"Field Agent"}';
        var json = JSON.parse(jsonString);
        
        //return this.http.post(`${config.apiUrl}/users/register`, user);
        return this.http.post(`http://10.6.38.11:8080/services/rs/registration/registerAu`, json);
        /*
       return this.http.post('/api',
      JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        EmailId:user.email,
        Department:user.Department,
        BadgeId:user.BadgeId,
        Role:user.Role
      })).subscribe(
      data => {
        alert('ok');
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
      )*/
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}
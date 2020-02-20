import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { User } from '@/_models';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    register(user: User) {
      console.log("Registeration happening")
      console.log(user.BadgeId);
      let headers = new HttpHeaders({'Content-Type':'application/json',
      'RSCD-Token':'DynattralL1TokenKey12345',
      'RSCD-JWT-Token':'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJc3N1ZXIiOiJEeW5hdHRyYWwgVGVjaCIsIklzc3VlZFRvIjoiWWVra28iLCJFbXBsb3llZUNvZGUiOiJFTVAyNTM1NjciLCJQYXlsb2FkS2V5IjoiMTJkMDhlYjBhYTkyYjk0NTk2NTU2NWIyOWQ1M2FkMWYxNWE1NTE0NGVkMDcxNGFjNTZjMzQ2NzdjY2JjYjQwMCIsIklzc3VlZEF0IjoiMTktMDQtMjAxOSAyLjU0LjIzIFBNIiwiQ2hhbm5lbCI6InNpdGUifQ.Rf7szVWkGiSXHXfGW-xj4TRIw3VQRAySrt9kaEk1kuM'});
      let data={
        "Name":{
          "firstName":user.firstName,
          "lastName":user.lastName
        },
        "EmailId":user.email,
        "Department":user.Department,
        "BadgeId":user.BadgeId,
        "Role":user.Role
      }
      console.log(data)

      let options = { headers : headers} 

      return  this.http.post('http://10.6.38.11:8080/services/rs/registration/registerAu', data,options).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
    
        )
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}
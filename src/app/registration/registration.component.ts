import { Component, OnInit} from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';

export interface dropDown{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  departments : dropDown[] = [
    {value: 'Medical', viewValue:'Medical'},
    {value:'Traffic',viewValue:'Traffic'},
    {value:'Law',viewValue:'Traffic'}
  ];

  roles : dropDown[] = [
    {value: 'officer', viewValue:'Officer'},
    {value:'admin',viewValue:'Admin'}
  ];

  submission;

  constructor(public http: HttpClient,private formBuilder: FormBuilder) { 
    this.submission = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      badgeId: '',
      department: '',
      role: ''
    });
  }


  

  ngOnInit(): void {

  }

  onSubmit(user):void{

    console.log(user);
        
    let headers = new HttpHeaders({'Content-Type':'application/json',
    'RSCD-Token':'DynattralL1TokenKey12345',
    'RSCD-JWT-Token':'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJJc3N1ZXIiOiJEeW5hdHRyYWwgVGVjaCIsIklzc3VlZFRvIjoiWWVra28iLCJFbXBsb3llZUNvZGUiOiJFTVAyNTM1NjciLCJQYXlsb2FkS2V5IjoiMTJkMDhlYjBhYTkyYjk0NTk2NTU2NWIyOWQ1M2FkMWYxNWE1NTE0NGVkMDcxNGFjNTZjMzQ2NzdjY2JjYjQwMCIsIklzc3VlZEF0IjoiMTktMDQtMjAxOSAyLjU0LjIzIFBNIiwiQ2hhbm5lbCI6InNpdGUifQ.Rf7szVWkGiSXHXfGW-xj4TRIw3VQRAySrt9kaEk1kuM'});
    let data={
      "Name":{
        "firstName":user.firstName,
        "lastName":user.lastName
      },
      "EmailId":user.email,
      "Department":user.department,
      "BadgeId":user.badgeId,
      "Role":user.role
    }
    console.log(data)

    let options = { headers : headers} 

    this.http.post('http://52.212.233.94:8080/services/rs/registration/registerAu/', data,options).subscribe(
      (response) => {
        //alert(JSON.stringify(response));
        alert("Registration is successful.");
        location.href = "/";
      },
      (error) => {
       //alert(JSON.stringify(error));
        alert("The user is existed.");
      }
    )

  }
}

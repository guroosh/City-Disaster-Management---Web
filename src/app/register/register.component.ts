import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    volunteerSelected = false;
    public volunteerTypes = ['','Medical','Traffic Management','General']
    public govtIdType = ['','PPS','Passport','GNIB']

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    checkBoxClicked()
    {
        this.volunteerSelected = !this.volunteerSelected
    }

    dropdownClicked(e)
    {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['Manasi', Validators.required],
            lastName: ['PP', Validators.required],
            email: ['Manasi@tcd.ie', Validators.required],
            badgeIdNumber: ['5566', Validators.required],
            Role: ['Field Agent', Validators.required],
            Department: ['Police', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }


    onSubmit() {
        this.submitted = true;
        
        // reset alerts on submit
        this.alertService.clear();
        //alert("Submission is running.");
        // stop here if form is invalid
        /*
        if (this.registerForm.invalid) {
            return;
        }*/
        //alert("Submission is running.");
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        //alert("Submission is successful.");
    }
}
/*
function submitForm() {
    alert("ttttt");
    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("avatar", this.form.get('avatar').value);
  
    this.http.post('http://10.6.38.11:8080/services/rs/registration/registerAu', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
*/

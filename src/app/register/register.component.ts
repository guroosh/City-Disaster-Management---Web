﻿import { Component, OnInit } from '@angular/core';
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
            BadgeId: ['5566', Validators.required],
            Role: ['Field Agent', Validators.required],
            Department: ['Police', Validators.required],
    
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }


    onSubmit() {
        this.submitted = true;
        this.loading = true;
       //alert("Registering user");
        var res = this.userService.register(this.registerForm.value,this);
        // reset alerts on submit
       //alert(res);
       //console.log("result");
       //console.log(res); 
       //this.loading = false;
       
    }
    success(){
        this.alertService.success('Registration successful',true);
        this.router.navigate(['/login']);
        this.loading = false;
        this.submitted = false;
    }
    fail(){
        this.loading = false;
        this.submitted = false;
    }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showMsg: boolean = false;
  msg : any ='';
  showPass: boolean;
  showPass2: boolean;

  constructor(
    private httpClient:HttpClient,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }
  
  toggle() {
    this.showPass = !this.showPass;
  }

  toggle2() {
    this.showPass2 = !this.showPass2;
  }

  registerUser(registerForm: NgForm){
    this.httpClient.post(environment.userUri + '/register', registerForm.value)
    .subscribe(response => {
      console.log(response);
      this.showMsg= true;
      setTimeout(() => {
        this.showMsg= false;
      },5000);  
      registerForm.reset();
    },
    error => {
      console.log("exception ocured"),
      this.msg=error.error
    })
  }
}

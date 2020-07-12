import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user.model';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  msg = '';
  user = new User();
  currentUser : any;

  constructor(
    private router: Router,
    private loginservice: AuthenticationService,
    private service: CurrentUserService,
    ) { }

  ngOnInit(){

  }

  loginUser(){
    this.loginservice.loggin(this.user).subscribe(
      data => {
        console.log("response recived"); 
        this.router.navigate(['user/profile']);
      },
      error => {
        console.log("exception ocured"),
        this.msg="Bad Credentials, please enter valid email and password!"
      })
  }
  
}

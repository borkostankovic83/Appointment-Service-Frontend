import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userType = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submitLoginData(){
    // Credentials validation


    // Routing toward the business owner/customer dashboard page
    console.log("this.userType: ",this.userType);
    if (this.userType === "business") this.router.navigate(['business']);
    else this.router.navigate(['']);    

  }
}

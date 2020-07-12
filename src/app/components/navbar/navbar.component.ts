import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   
  user : any;

  constructor(
    public loginService:AuthenticationService,
    public currentUserService:CurrentUserService
        ) { }



 ngOnInit() {
  this.currentUserService.getUserData().subscribe((data) => {
    this.user = data;
 })
  }

  role(){
    this.currentUserService.getUserData().subscribe((data) => {
      this.user = data;
      return data;
   })
    
  }


}




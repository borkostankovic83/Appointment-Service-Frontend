import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : any;

  constructor(
    public currentUserService:CurrentUserService,
    public router:Router
    ) { }

  ngOnInit() {
    this.currentUserService.getUserData().subscribe((data) => {
      this.user = data;
   })
  }
  gotoUserDashboard() {
    this.router.navigate(['user/dashboard']);
  }
  gotoVetDashboard() {
    this.router.navigate(['vet/dashboard']);
  }
  gotoAdminDashboard() {
    this.router.navigate(['admin/dashboard']);
  }
  
}

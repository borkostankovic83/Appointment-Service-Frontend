import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user : any;
  showPass: boolean;

  constructor(
    public currentUserService:CurrentUserService,
    public router:Router,
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
  
  toggle() {
    this.showPass = !this.showPass;
  }
}
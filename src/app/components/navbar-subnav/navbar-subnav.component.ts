import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-subnav',
  templateUrl: './navbar-subnav.component.html',
  styleUrls: ['./navbar-subnav.component.css']
})
export class NavbarSubnavComponent implements OnInit {
  
  user : any;

  constructor(
    public currentUserService:CurrentUserService,
    public router:Router,
    ) { }

    reload() {
      this.router.navigate(['dashboard']);
    }

  ngOnInit() {
    this.currentUserService.getUserData().subscribe((data) => {
      this.user = data;
   })
  }
}
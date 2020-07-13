import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user : any;
  showPass: boolean;
  retrieveResonse: Object;
  showMsg: boolean;

  constructor(
    public currentUserService:CurrentUserService,
    public router:Router,
    public httpClient:HttpClient
    ) { }

  ngOnInit() {
    this.currentUserService.getUserData().subscribe((data) => {
      this.user = data;
   })
  }

  updateProfile(userData) {
    this.httpClient.put(environment.userUri + '/' + this.user.id, userData)
      .subscribe(
        response => {
          this.retrieveResonse = response;
          console.log(response);
          this.showMsg= true;
          setTimeout(() => {
            this.showMsg= false;
        },5000);
        }     
      );
  }
  
  toggle() {
    this.showPass = !this.showPass;
  }

  reset() {
    this.ngOnInit();
  }
}

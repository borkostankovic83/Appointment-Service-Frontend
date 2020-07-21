import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, AfterViewInit {

  user : any;
  showPass: boolean;
  retrieveResonse: any;
  showMsg: boolean;
  base64Data: any;
  retrievedImage: any;
  selectedFile: File;

  constructor(
    public currentUserService:CurrentUserService,
    public router:Router,
    public httpClient:HttpClient
    ) { }

  ngAfterViewInit() {
    this.getImage(); 
  }

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
  
  getImage() {          
    this.httpClient.get(environment.imageUri + "/" + this.user.id)  
      .subscribe(  
        data => {
          this.retrieveResonse = data;
          this.base64Data = this.retrieveResonse.image;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        });  
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.httpClient.put(environment.imageUri + "/" + this.user.id, fd)
    .subscribe(res =>{
      console.log(res);
    })
  }
  toggle() {
    this.showPass = !this.showPass;
  }

  reset() {
    this.ngOnInit();
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, AfterViewInit {

  user : any;
  showPass: boolean;
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: any;
  selectedFile: File;

  constructor(
    public currentUserService:CurrentUserService,
    private httpClient:HttpClient,
    public router:Router
    ) { }

  ngAfterViewInit() {
    this.getImage(); 
  }

  ngOnInit() {
    this.currentUserService.getUserData().subscribe((data) => {
      this.user = data;
   })
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
}

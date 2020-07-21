import { Component, OnInit, ɵConsole, AfterViewInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit, AfterViewInit {
  user: any;
  selectedFile: any;

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  constructor( 
    public currentUserService:CurrentUserService,
    private httpClient:HttpClient,
    ) { }

  ngAfterViewInit() {
    this.getImage(); 
  }

  ngOnInit() {
    this.getInfo();  
  }

  getInfo() {
    return this.currentUserService.getUserData()
    .subscribe((user) => {
      this.user = user;
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

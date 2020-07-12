import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  response: any;
  result: any;

  constructor(private httpClient: HttpClient) { }

  getUserData() {
    return this.httpClient.get(environment.userUri+ '/' + sessionStorage.getItem('username')); 
  }

  getUserDataSubscribed() {
    return this.httpClient.get(environment.userUri+ '/' + sessionStorage.getItem('username'))
    .subscribe((result) => {
      this.result = result;
    })
  }


}

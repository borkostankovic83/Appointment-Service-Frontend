import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  public logginFromRemote(user :User):Observable<any>{
    console.log(user.email);
    console.log(user.password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.email + ':' + user.password) });
    return this.httpClient.post<any>(environment.loginUri, user, { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', user.email);
          let authString = 'Basic ' + btoa(user.email + ':' + user.password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
          }
        )
        );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private loginService:AuthenticationService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  }

  hide() : boolean{
    return this.loginService.isUserLoggedIn();
   }
}

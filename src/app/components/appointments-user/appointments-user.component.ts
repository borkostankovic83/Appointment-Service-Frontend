import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-appointments-user',
  templateUrl: './appointments-user.component.html',
  styleUrls: ['./appointments-user.component.css']
})
export class AppointmentsUserComponent implements OnInit {

  user:any;
  appointment: any;

  constructor(
    private httpClient:HttpClient,
    private currentUser:CurrentUserService,
    ) { }

  ngOnInit() {
    this.getAppointments();
    this.currentUser.getUserData().subscribe((user) => {this.user = user;})
  }

  getAppointments() {
    this.httpClient.get(environment.appointmentsUri)
    .subscribe((appointment) => {
      this.appointment = appointment;
    })
  }

}


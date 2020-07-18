import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointment: any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments() {
    this.httpClient.get(environment.appointmentsUri)
    .subscribe((appointment) => {
      this.appointment = appointment;
    })
  }

}

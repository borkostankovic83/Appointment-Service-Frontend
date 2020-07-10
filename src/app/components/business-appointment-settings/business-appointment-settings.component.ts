import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-appointment-settings',
  templateUrl: './business-appointment-settings.component.html',
  styleUrls: ['./business-appointment-settings.component.css']
})
export class BusinessAppointmentSettingsComponent implements OnInit {

  Appointment_MaxDaysAhead:string;
  Appointment_Duration:string;

  constructor() { }

  ngOnInit(): void {
  }

}

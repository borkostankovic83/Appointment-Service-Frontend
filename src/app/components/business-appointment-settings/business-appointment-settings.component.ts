import { Component, OnInit } from '@angular/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-business-appointment-settings',
  templateUrl: './business-appointment-settings.component.html',
  styleUrls: ['./business-appointment-settings.component.css']
})
export class BusinessAppointmentSettingsComponent implements OnInit {

  Appointment_MaxDaysAhead:string;
  Appointment_Duration:string;
  monday_morning_schedule_begin:string;
  

  constructor() { }

  ngOnInit(): void {
    flatpickr(".day-input",{
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i"
  });
  }

  
}

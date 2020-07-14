import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppointmentSettings} from 'src/app/models/appointment-settings.model';
import {VetService} from 'src/app/services/vet.service';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-business-appointment-settings',
  templateUrl: './business-appointment-settings.component.html',
  styleUrls: ['./business-appointment-settings.component.css']
})
export class BusinessAppointmentSettingsComponent implements OnInit {
  //pre-defined values
  max_number_of_days_ahead_admin_value = 365;
  appointment_duration_admin_value = 60;
  //
  appointment_duration_user_value:number;
  appointment_maxDaysAhead_user_value:number;
  monday_morning_schedule_begin:string;
  tuesday_morning_schedule_begin:string;
  wednesday_morning_schedule_begin:string;
  thursday_morning_schedule_begin:string;
  friday_morning_schedule_begin:string;
  saturday_morning_schedule_begin:string;
  sunday_morning_schedule_begin:string;
  monday_morning_schedule_end:string;
  tuesday_morning_schedule_end:string;
  wednesday_morning_schedule_end:string;
  thursday_morning_schedule_end:string;
  friday_morning_schedule_end:string;
  saturday_morning_schedule_end:string;
  sunday_morning_schedule_end:string;
  //
  monday_afternoon_schedule_begin:string;
  tuesday_afternoon_schedule_begin:string;
  wednesday_afternoon_schedule_begin:string;
  thursday_afternoon_schedule_begin:string;
  friday_afternoon_schedule_begin:string;
  saturday_afternoon_schedule_begin:string;
  sunday_afternoon_schedule_begin:string;
  monday_afternoon_schedule_end:string;
  tuesday_afternoon_schedule_end:string;
  wednesday_afternoon_schedule_end:string;
  thursday_afternoon_schedule_end:string;
  friday_afternoon_schedule_end:string;
  saturday_afternoon_schedule_end:string;
  sunday_afternoon_schedule_end:string;
  //subscriptions results
  postAppointmentSettingsResults:any;

  

  constructor(private http:HttpClient, private vetService:VetService) { }

  ngOnInit(): void {
    flatpickr(".day-input",{
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i"
   });
  }

  submitAppointmentSettings()
  {
    let appointmentSettings = new AppointmentSettings();
    appointmentSettings.appointment_duration_user_value  = this.appointment_duration_user_value;
    appointmentSettings.appointment_maxDaysAhead_user_value  = this.appointment_maxDaysAhead_user_value;
    appointmentSettings.monday_morning_schedule_begin = this.monday_morning_schedule_begin;
    appointmentSettings.monday_morning_schedule_end = this.monday_morning_schedule_end;
    appointmentSettings.monday_afternoon_schedule_begin = this.monday_afternoon_schedule_begin;
    appointmentSettings.monday_afternoon_schedule_end = this.monday_afternoon_schedule_end;
    //
    appointmentSettings.tuesday_morning_schedule_begin = this.tuesday_morning_schedule_begin;
    appointmentSettings.tuesday_morning_schedule_end = this.tuesday_morning_schedule_end;
    appointmentSettings.tuesday_afternoon_schedule_begin = this.tuesday_afternoon_schedule_begin;
    appointmentSettings.tuesday_afternoon_schedule_end = this.tuesday_afternoon_schedule_end;
    //
    appointmentSettings.wednesday_morning_schedule_begin = this.wednesday_morning_schedule_begin;
    appointmentSettings.wednesday_morning_schedule_end = this.wednesday_morning_schedule_end;
    appointmentSettings.wednesday_afternoon_schedule_begin = this.wednesday_afternoon_schedule_begin;
    appointmentSettings.wednesday_afternoon_schedule_end = this.wednesday_afternoon_schedule_end;
    //
    appointmentSettings.thursday_morning_schedule_begin = this.thursday_morning_schedule_begin;
    appointmentSettings.thursday_morning_schedule_end = this.thursday_morning_schedule_end;
    appointmentSettings.thursday_afternoon_schedule_begin = this.thursday_afternoon_schedule_begin;
    appointmentSettings.thursday_afternoon_schedule_end = this.thursday_afternoon_schedule_end;
    //
    appointmentSettings.friday_morning_schedule_begin = this.friday_morning_schedule_begin;
    appointmentSettings.friday_morning_schedule_end = this.friday_morning_schedule_end;
    appointmentSettings.friday_afternoon_schedule_begin = this.friday_afternoon_schedule_begin;
    appointmentSettings.friday_afternoon_schedule_end = this.friday_afternoon_schedule_end;
    //
    appointmentSettings.saturday_morning_schedule_begin = this.saturday_morning_schedule_begin;
    appointmentSettings.saturday_morning_schedule_end = this.saturday_morning_schedule_end;
    appointmentSettings.saturday_afternoon_schedule_begin = this.saturday_afternoon_schedule_begin;
    appointmentSettings.saturday_afternoon_schedule_end = this.saturday_afternoon_schedule_end;
    //
    appointmentSettings.sunday_morning_schedule_begin = this.sunday_morning_schedule_begin;
    appointmentSettings.sunday_morning_schedule_end = this.sunday_morning_schedule_end;
    appointmentSettings.sunday_afternoon_schedule_begin = this.sunday_afternoon_schedule_begin;
    appointmentSettings.sunday_afternoon_schedule_end = this.sunday_afternoon_schedule_end;

    console.log(appointmentSettings);

    this.vetService.submitAppointmentSettings(appointmentSettings).subscribe(
      data => (this.postAppointmentSettingsResults = data),
      error => (console.log("Error during vetService.submitAppointmentSettings(appointmentSettings).subscribe",error))
    );
    
  }

  
}

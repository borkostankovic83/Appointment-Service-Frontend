import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {BusinessAppointmentSettingsComponent} from 'src/app/components/business-appointment-settings/business-appointment-settings.component';
import { AppointmentSettings } from '../models/appointment-settings.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  constructor(private http:HttpClient) { }

  submitAppointmentSettings(appointmentSettings:AppointmentSettings):Observable<Object>{
    return this.http.post(environment.url+"\appointmentSettings", appointmentSettings);
  }

  

}

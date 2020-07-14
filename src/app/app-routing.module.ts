import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from 'src/app/components/landing-page/landing-page.component';
import {LoginComponent} from 'src/app/components/login/login.component';
import {RegisterComponent} from 'src/app/components/register/register.component';
import {BusinessScheduleDisplayComponent} from 'src/app/components/business-schedule-display/business-schedule-display.component';
import {PageNotFoundComponent} from 'src/app/components/page-not-found/page-not-found.component';
import { BusinessAppointmentSettingsComponent } from './components/business-appointment-settings/business-appointment-settings.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RoleGuardService } from './services/role-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserComponent } from './components/user/user.component';
import { VetComponent } from './components/vet/vet.component';
import { AdminComponent } from './components/admin/admin.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';


const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'home', component:LandingPageComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'logout', component: LogoutComponent, canActivate:[AuthGaurdService]},
  {path:'business',component:BusinessScheduleDisplayComponent},
  {path:'appointmentSettings',component:BusinessAppointmentSettingsComponent},
  {path:'profile', component:UserProfileComponent, canActivate:[AuthGaurdService]},
  {path:'edit/profile', component:EditUserComponent, canActivate:[AuthGaurdService]},
  {path:'dashboard', 
  component:DashboardComponent, 
  canActivate:[AuthGaurdService], 
  children: [
    {path:'', component:AppointmentsComponent},
    {path:'appointments', component:AppointmentsComponent},
    {path:'messages', component:MessagesComponent},
    {path:'make-appointment', component:MakeAppointmentComponent},
    {path:'ask', component:AskQuestionComponent},
    {path:'schedule', component:BusinessScheduleDisplayComponent},
    {path:'settings', component:BusinessAppointmentSettingsComponent},
    {path:'users', component:UserComponent, canActivate:[RoleGuardService]},
    {path:'vets', component:VetComponent, canActivate:[RoleGuardService]},
    {path:'admins', component:AdminComponent, canActivate:[RoleGuardService]},
  ]
},
  {path:'make/appointmet', component:AppointmentsComponent, canActivate:[AuthGaurdService]},
  {path:'**',component:PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

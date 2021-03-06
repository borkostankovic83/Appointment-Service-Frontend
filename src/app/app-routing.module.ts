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
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';


const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'home', component:LandingPageComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'logout', component: LogoutComponent, canActivate:[AuthGaurdService]},
  {path:'business',component:BusinessScheduleDisplayComponent},
  {path:'appointmentSettings',component:BusinessAppointmentSettingsComponent},
  {path:'user/profile', component:UserProfileComponent, canActivate:[AuthGaurdService]},
  {path:'admin/panel', component:AdminPanelComponent, data:{role: 'Admin'}, canActivate:[RoleGuardService]},
  {path:'**',component:PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

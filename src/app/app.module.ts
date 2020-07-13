import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BusinessAppointmentSettingsComponent } from './components/business-appointment-settings/business-appointment-settings.component';
import { BusinessScheduleEditionDailyComponent } from './components/business-schedule-edition-daily/business-schedule-edition-daily.component';
import { BusinessScheduleEditionWeeklyComponent } from './components/business-schedule-edition-weekly/business-schedule-edition-weekly.component';
import { BusinessScheduleDisplayComponent } from './components/business-schedule-display/business-schedule-display.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { VetDashboardComponent } from './components/vet-dashboard/vet-dashboard.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    BusinessAppointmentSettingsComponent,
    BusinessScheduleEditionDailyComponent,
    BusinessScheduleEditionWeeklyComponent,
    BusinessScheduleDisplayComponent,
    LogoutComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    VetDashboardComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

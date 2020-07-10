import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BusinessAppointmentSettingsComponent } from './components/business-appointment-settings/business-appointment-settings.component';
import { BusinessScheduleEditionDailyComponent } from './components/business-schedule-edition-daily/business-schedule-edition-daily.component';
import { BusinessScheduleEditionWeeklyComponent } from './components/business-schedule-edition-weekly/business-schedule-edition-weekly.component';
import { BusinessScheduleDisplayComponent } from './components/business-schedule-display/business-schedule-display.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    BusinessAppointmentSettingsComponent,
    BusinessScheduleEditionDailyComponent,
    BusinessScheduleEditionWeeklyComponent,
    BusinessScheduleDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

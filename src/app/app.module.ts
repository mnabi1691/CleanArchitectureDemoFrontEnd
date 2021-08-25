import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportserviceService } from './shared/reportservice.service';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportListComponent } from './report-list/report-list.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ReportListComponent,
    AppointmentListComponent,
    AppointmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ReportserviceService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

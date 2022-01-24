import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightservService } from './flightserv.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FlightservService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }

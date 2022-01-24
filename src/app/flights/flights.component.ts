import { Component, OnInit } from '@angular/core';
import { FlightservService } from '../flightserv.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private http:FlightservService) { }

  flightData: any = []
  developerName = "Selva Kumar";
  showError:any ;
  sucess: boolean = true;
  LandSucc: boolean = true;

  ngOnInit() {
    this.http.fetchFlights().subscribe(data => {
      this.flightData = data;
      if (this.flightData.length == 0) {
        this.showError = "No Record Found";
      }
      console.log("Data :", this.flightData)
    })
  }

  selectYear(year:any): void {
    console.log(year);
    this.http.fetchAll(year, this.sucess, this.LandSucc).subscribe(data => {
      this.flightData = data;
      console.log("sucees :", this.flightData)
    })
  }
  launchSuccess(succ:any) {
    this.sucess = succ;
    this.http.fetchLanchSucess(succ).subscribe(data => {
      this.flightData = data;
      console.log("sucees :", this.flightData)
    })
  }
  launchSuccessLandingSuccess(val:any) {
    this.LandSucc = val;
    this.http.fetchLanchSucessAndLandSuccess(val).subscribe(data => {
      this.flightData = data;
      console.log("Land :", this.flightData)
    })
  }

}

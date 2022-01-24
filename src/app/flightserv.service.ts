import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FlightservService {

  constructor(private http:HttpClient) { }

  fetchFlights():Observable<any>{
    return  this.http.get<any>("https://api.spacexdata.com/v3/launches?limit=100");
  }

  fetchAll(year:any,Launch:any,Land:any) {
    return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+Launch+"&land_success="+Land+"&launch_year="+year);
  }

   fetchLanchSucess(succ:any) {
     console.log(succ,"Hi")
     return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+succ);
   }

   fetchLanchSucessAndLandSuccess(val:any){
    return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success="+val);
   }

  
}

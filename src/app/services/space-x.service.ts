import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  baseUrl:any = "https://api.spacexdata.com/v3/launches?limit=";
  constructor(private http:HttpClient) { }

  // get All spaceX data
  getAllSpaceX(limit) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.get(this.baseUrl + limit, {headers: headers});
  }

  // // launch success filter
  launchSucessFilter(limit,launchSuccess){
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.get(this.baseUrl + limit + '&launch_success=' + launchSuccess, {headers: headers});
  }

  // launch and land filter
  launchAndLandFilter(limit,launchSuccess, landSuccess){
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.get(this.baseUrl + limit + '&launch_success=' + launchSuccess+ '&land_success=' + landSuccess, {headers: headers});
  }

  // launch and land filter
  overAllFilter(limit,launchSuccess, landSuccess, launch_year){
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.get(this.baseUrl + limit + '&launch_success=' + launchSuccess+ '&land_success=' + landSuccess + '&launch_year=' + launch_year, {headers: headers});
  }
}

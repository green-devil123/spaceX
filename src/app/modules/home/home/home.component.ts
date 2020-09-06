import { Component, OnInit } from '@angular/core';
import { SpaceXService } from 'src/app/services/space-x.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  limit:number = 100;
  spaceAllDataGroupBy:any;
  spaceAllData:any;
  launchYears = [];
  successLaunch:boolean = true;
  successLanding:boolean = true;
  launch_year = "2006";

  constructor(
    public spacexService: SpaceXService) { }

  selectYear(e,year){
    const self = this;
    self.launch_year = year;
    self.spaceAllData = [];
    self.spacexService.overAllFilter(self.limit,self.successLaunch,self.successLanding,self.launch_year).subscribe(res=>{
      self.spaceAllData = res;
    });
  }

  selectSuccessLaunch(e, status){
    if(status){
      this.successLaunch = true;
    }else{
      this.successLaunch = false;
    }
    const self = this;
    self.spaceAllData = [];
    self.spacexService.launchSucessFilter(self.limit,self.successLaunch).subscribe(res=>{
      self.spaceAllData = res;
    });
  }
  
  selectSuccessLanding(e, status){
    if(status){
      this.successLanding = true;
    }else{
      this.successLanding = false;
    }
    const self = this;
    self.spaceAllData = [];
    self.spacexService.launchAndLandFilter(self.limit,self.successLaunch, self.successLanding).subscribe(res=>{
      self.spaceAllData = res;
    });
  }

  ngOnInit(): void {
    const limit = this.limit;
    const self = this;
    self.spaceAllData = [];
    this.spacexService.getAllSpaceX(limit).subscribe(res=>{
      self.spaceAllData = res;
      self.spaceAllDataGroupBy = self.spaceAllData.reduce(function (r, a) {
        r[a.launch_year] = r[a.launch_year] || [];
        r[a.launch_year].push(a);
        return r;
      }, Object.create(null));
      self.launchYears = Object.keys(self.spaceAllDataGroupBy);
    });

  }

}

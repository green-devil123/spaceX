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
  successLaunch:boolean;
  successLaunchStatus:number;
  successLanding:boolean;
  successLandingStatus:number;
  launch_year:string = "";

  constructor(
    public spacexService: SpaceXService) { }

  selectYear(e,year){
    const self = this;
    self.launch_year = year;
    self.emtySpaceAllData();
    if(self.successLaunch != undefined && self.successLanding != undefined){
      self.spacexService.overAllFilter(self.limit,self.successLaunch,self.successLanding,self.launch_year).subscribe(res=>{
        self.spaceAllData = res;
      });
    }else{
      if(self.successLaunch != undefined){

        self.spacexService.overAllFilterByLaunch(self.limit,self.successLaunch, self.launch_year).subscribe(res=>{
          self.spaceAllData = res;
        });
      }else{
        if(self.successLanding != undefined){
  
          self.spacexService.overAllFilterByLand(self.limit,self.successLanding, self.launch_year).subscribe(res=>{
            self.spaceAllData = res;
          });
        }else{
  
          self.spacexService.overAllFilterByLaunchYear(self.limit, self.launch_year).subscribe(res=>{
            self.spaceAllData = res;
          });
        }
      }
    }
  }

  selectSuccessLaunch(e, status){
    this.successLaunchStatus = status;
    if(status){
      this.successLaunch = true;
    }else{
      this.successLaunch = false;
      this.successLanding = undefined;
      this.successLandingStatus = undefined;
    }
    const self = this;
    if(self.launch_year && self.launch_year != undefined ){
      self.selectYear(e, self.launch_year)
    }
    else{
      if(self.successLanding != undefined){
        self.selectSuccessLanding(e, self.successLanding)
      }
      else{
        self.emtySpaceAllData();
        self.spacexService.launchSucessFilter(self.limit,self.successLaunch).subscribe(res=>{
          self.spaceAllData = res;
        });
      }
    }
  }
  
  selectSuccessLanding(e, status){
    this.successLandingStatus = status;
    if(status){
      this.successLanding = true;
    }else{
      this.successLanding = false;
    }
    const self = this;
    if(self.launch_year != undefined){
      self.selectYear(e, self.launch_year)
    }else{
      self.emtySpaceAllData();
      self.spacexService.launchAndLandFilter(self.limit,self.successLaunch, self.successLanding).subscribe(res=>{
        self.spaceAllData = res;
      });
    }
  }

  emtySpaceAllData(){
    this.spaceAllData = [];
  }

  ngOnInit(): void {
    const limit = this.limit;
    const self = this;
    self.emtySpaceAllData();
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

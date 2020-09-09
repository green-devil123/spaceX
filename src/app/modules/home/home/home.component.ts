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
  launch_year:string;
  loaded = false;

  constructor(
    public spacexService: SpaceXService) { }

  selectYear(e,year){
    const self = this;
    self.launch_year = year;
    self.emtySpaceAllData();
    self.loaded = false;
    if(self.successLaunch != undefined && self.successLanding != undefined){
      self.spacexService.overAllFilter(self.limit,self.successLaunch,self.successLanding,self.launch_year).subscribe(res=>{
        if(res){
          self.func(res);
          self.afterDataLoad();
        }
      });
    }else{
      if(self.successLaunch != undefined){

        self.spacexService.overAllFilterByLaunch(self.limit,self.successLaunch, self.launch_year).subscribe(res=>{
          if(res){
            self.func(res);
            self.afterDataLoad();
          }
        });
      }else{
        if(self.successLanding != undefined){
          self.spacexService.overAllFilterByLand(self.limit,self.successLanding, self.launch_year).subscribe(res=>{
            if(res){
              self.func(res);
              self.afterDataLoad();
            }
          });
        }else{
  
          self.spacexService.overAllFilterByLaunchYear(self.limit, self.launch_year).subscribe(res=>{
            if(res){
              self.func(res);
              self.afterDataLoad();
            }
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
    }
    const self = this;
    self.loaded = false;
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
          if(res){
            self.func(res);
            self.afterDataLoad();
          }
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
    self.loaded = false;
    if(self.launch_year != undefined){
      self.selectYear(e, self.launch_year)
    }else{
      self.emtySpaceAllData();
      self.spacexService.launchAndLandFilter(self.limit,self.successLaunch, self.successLanding).subscribe(res=>{
        if(res){
          self.func(res);
          self.afterDataLoad();
        }
      });
    }
  }

  emtySpaceAllData(){
    this.spaceAllData = [];
  }

  func(spaceAllData) {
    spaceAllData.forEach(obj=>{
      const objdata = obj['rocket']['first_stage']['cores'];
      if(objdata.length > 0){
        obj['land_success'] = objdata[0].land_success
      }
      this.spaceAllData.push({
        launch_year: obj.launch_year,
        launch_success: obj.launch_success,
        land_success: obj.launch_success,
        mission_patch_small: obj.links.mission_patch_small,
        mission_name: obj.mission_name,
        flight_number: obj.flight_number,
        mission_id: obj.mission_id,
      })
    })
  }

  afterDataLoad(){
    setInterval(() => {
      this.loaded = true;
    }, 4000);
  }

  ngOnInit(): void {
    const limit = this.limit;
    const self = this;
    self.emtySpaceAllData();
    self.spacexService.getAllSpaceX(limit).subscribe(res=>{
      if(res){
        self.func(res);
        self.spaceAllDataGroupBy = self.spaceAllData.reduce(function (r, a) {
        r[a.launch_year] = r[a.launch_year] || [];
        r[a.launch_year].push(a);
        return r;
        }, Object.create(null));
        self.launchYears = Object.keys(self.spaceAllDataGroupBy);
        self.afterDataLoad();
      }
    });

  }

}

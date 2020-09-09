import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CardLoaderComponent } from './card-loader/card-loader.component';
import { CardBoxComponent } from './home/card-box/card-box.component';

// Routing
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]


@NgModule({
  declarations: [HomeComponent, CardLoaderComponent, CardBoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }

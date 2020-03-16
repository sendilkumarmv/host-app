import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityListContainer } from './city/container/city-list.container';

const routes: Routes = [
  {
    path:'citylist',
    component: CityListContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }

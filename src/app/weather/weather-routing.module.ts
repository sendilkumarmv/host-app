import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityListContainer } from './city/container/city-list.container';
import { CurrLocationContainer } from './current/container/curr-location.container';

const routes: Routes = [
  {
    path: 'citylist',
    component: CityListContainer
  },
  {
    path: 'home',
    component: CurrLocationContainer
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }

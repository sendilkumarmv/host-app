import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { StatusComponent } from './status/status.component';
import { CurrLocationComponent } from './weather/current/curr-location.component';

const routes: Routes = [
  {
    path:'weather',
    loadChildren: () => { return import('./weather/weather.module').then(module => module.WeatherModule) }
  },
  {
    path:'contacts',
    component: ContactsComponent
  },
  {
    path: 'status',
    component: StatusComponent
  },
  {
    path: '',
    component: CurrLocationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

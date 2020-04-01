import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule }  from '@ngrx/effects';
import { CityListComponent } from './city/component/city-list.component';
import { CityListContainer } from './city/container/city-list.container';
import { WeatherRoutingModule } from './weather-routing.module';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { WeatherReducer } from './store/weather.reducer';
import { WeatherEffects } from './store/weather.effects';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllMaterialModule } from './all-material.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { API_BASE_URL } from './general';
import { CurrLocationComponent } from './current/component/curr-location.component';
import { CurrLocationContainer } from './current/container/curr-location.container';
import { TinyComponent } from './widget/tiny.component';
import { HourlyComoponent } from './hourly/component/hourly.component';
import { HourlyContainer } from './hourly/container/hourly.container';
import { RouteGurdService } from './services/route.gurdService';
import { GeolocationService } from './services/geolocation.service';

@NgModule({
  declarations: [
    CityListComponent,
    CityListContainer,
    CurrLocationComponent,
    CurrLocationContainer,
    HourlyComoponent,
    HourlyContainer,
    TinyComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('weatherState',WeatherReducer),
    EffectsModule.forFeature([WeatherEffects]),
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AllMaterialModule
  ],

  providers:[
    ApiService,
    RouteGurdService,
    { provide: API_BASE_URL, useValue: 'http://localhost:59377'},
    GeolocationService
  ]
})
export class WeatherModule { }

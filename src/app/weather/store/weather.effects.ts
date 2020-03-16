import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators/';
import { WeatherActionTypes, GetCountriesAction, GetCountriesSuccessAction, GeneralErrorAction, GetCurrentLocationAction, GetCurrentLocationWeatherSuccessAction } from './weather.actions';
import { ApiService } from '../services/api.service';
import { City } from '../models/city.model';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { OpenWeatherService } from '../services/ow.service';

@Injectable()
export class WeatherEffects {

  constructor(private actions: Actions,
              private apiService: ApiService,
              private owApiService: OpenWeatherService) {

  }

  @Effect()
  selectCountries$ = this.actions.pipe(
    ofType<GetCountriesAction>(WeatherActionTypes.GetCountries),
    switchMap( (action) => {
      return this.apiService.getCities(action.payLoad).pipe(
        map( (result) => {
          const cities: City[] = result as City[];
          return new GetCountriesSuccessAction(cities);
        }),
        catchError( (error: HttpErrorResponse) => {
          console.log(error);
          return of(new GeneralErrorAction(error.statusText))
        })
      )
    })
  )

  selectLocatgion$ = this.actions.pipe(
    ofType<GetCurrentLocationAction>(WeatherActionTypes.GetCurrentLocation),
    switchMap( (action) => {
      return this.owApiService.getCurrentByLocation(action.payLoad).pipe(
        map( (result) => {
            return new GetCurrentLocationWeatherSuccessAction(result);
        }),
        catchError( (error: HttpErrorResponse) => {
          console.log(error);
          return of(new GeneralErrorAction(error.statusText))
        })
      )
    })
  )

}

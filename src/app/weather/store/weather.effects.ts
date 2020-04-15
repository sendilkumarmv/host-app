import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators/';
import {
  WeatherActionTypes,
  GetCitiesAction,
  GetCitiesSuccessAction,
  GeneralErrorAction,
  GetCurrentLocationSuccessAction,
  GetCurrentLocationWeatherSuccessAction,
  GetCurrentLocationAction } from './weather.actions';
import { ApiService } from '../services/api.service';
import { City } from '../models/city.model';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { LocationCoordinates } from '../models/Coordinates.model'

@Injectable()
export class WeatherEffects {

  constructor(private actions: Actions,
              private apiService: ApiService ) {

  }

  @Effect()
  selectCountries$ = this.actions.pipe(
    ofType<GetCitiesAction>(WeatherActionTypes.GetCities),
    switchMap( (action) => {
      return this.apiService.getCities(action.payLoad).pipe(
        map( (result) => {
          const cities: City[] = result as City[];
          return new GetCitiesSuccessAction(cities);
        }),
        catchError( (error: HttpErrorResponse) => {
          return of(new GeneralErrorAction(error.statusText))
        })
      )
    })
  )

  @Effect()
  currentLocation$ = this.actions.pipe(
    ofType<GetCurrentLocationAction>(WeatherActionTypes.GetCurrentLocation),
    switchMap( (action) => {
      return this.apiService.getCurrentLocation().pipe(
        map( (result) => {
          return new GetCurrentLocationSuccessAction(result);
        }),
        catchError( (error: HttpErrorResponse) => {
          return of(new GeneralErrorAction(error.statusText))
        })
      )
    })
  )

  @Effect()
  selectLocatgion$ = this.actions.pipe(
    ofType<GetCurrentLocationSuccessAction>(WeatherActionTypes.GetCurrentLocationSuccess),
    switchMap( (action) => {
      return this.apiService.getWeatherByCoordinates(action.payLoad).pipe(
        map( (result) => {
            console.log(result);
            return new GetCurrentLocationWeatherSuccessAction(result);
        }),
        catchError( (error: HttpErrorResponse) => {
          return of(new GeneralErrorAction(error.statusText))
        })
      )
    })
  )




}

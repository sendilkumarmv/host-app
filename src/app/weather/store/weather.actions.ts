import { Action } from '@ngrx/store';

import { City } from '../models/city.model';
import { Coordinates } from '../models/Coordinates.model';

export enum WeatherActionTypes {
  GetCountries = '[Weather] Get Countries',
  GetCountriesSuccess = '[Weather] Get Countries Success',
  GetCurrentLocation = '[Weather] Get Current Location',
  GetCurrentLocationWeatherSuccess = '[Weather] Get Current Location Weather Success',
  GeneralError ="[Weather] General Error"
}

export class GetCountriesAction implements Action {
  readonly type: string = WeatherActionTypes.GetCountries;
  constructor(public payLoad: string) {}
}

export class GetCountriesSuccessAction implements Action {
  readonly type: string = WeatherActionTypes.GetCountriesSuccess;
  constructor(public payLoad: City[]) {}
}


export class GeneralErrorAction implements Action {
  readonly type: string = WeatherActionTypes.GeneralError;
  constructor(public payLoad: string) {

  }
}

export class GetCurrentLocationAction implements Action {
  readonly type: string = WeatherActionTypes.GetCurrentLocation;
  constructor(public payLoad: Coordinates) {
  }
}

export class GetCurrentLocationWeatherSuccessAction implements Action {
  readonly type: string = WeatherActionTypes.GetCurrentLocationWeatherSuccess;
  constructor(public payLoad: any) {
  }
}

export type WeatherActions = GetCountriesAction
| GetCountriesSuccessAction
| GetCurrentLocationAction
| GetCurrentLocationWeatherSuccessAction
| GeneralErrorAction ;

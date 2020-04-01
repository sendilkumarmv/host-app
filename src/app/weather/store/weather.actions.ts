import { Action } from '@ngrx/store';

import { City } from '../models/city.model';
import { Coordinates } from '../models/Coordinates.model';

export enum WeatherActionTypes {
  GetCountries = '[Weather] Get Countries',
  GetCountriesSuccess = '[Weather] Get Countries Success',

  GetCurrentLocation = '[Weather] Get Current Location',
  GetCurrentLocationSuccess = '[Weather] Get Current Location Success',

  GetCurrentLocationWeather ='[Weather] Get Current Location Weather',
  GetCurrentLocationWeatherSuccess = '[Weather] Get Current Location Weather Success',

  GeneralError = "[Weather] General Error"
}

export class GetCountriesAction implements Action {
  readonly type: string = WeatherActionTypes.GetCountries;
  constructor(public payLoad: string) {}
}

export class GetCountriesSuccessAction implements Action {
  readonly type: string = WeatherActionTypes.GetCountriesSuccess;
  constructor(public payLoad: City[]) {}
}
/* */

export class GetCurrentLocationAction implements Action {
  readonly type: string = WeatherActionTypes.GetCurrentLocation;
  constructor(public payLoad: boolean) {
  }
}

export class GetCurrentLocationSuccessAction implements Action {
  readonly type: string = WeatherActionTypes.GetCurrentLocationSuccess;
  constructor(public payLoad: Coordinates) {
  }
}
/* */

export class GetCurrentLocationWeather implements Action {
  readonly type: string = WeatherActionTypes.GetCurrentLocationWeather;
  constructor(public payLoad: boolean) {
  }
}

export class GetCurrentLocationWeatherSuccessAction implements Action {
  readonly type: string = WeatherActionTypes.GetCurrentLocationWeatherSuccess;
  constructor(public payLoad: any) {
  }
}
/* */

export class GeneralErrorAction implements Action {
  readonly type: string = WeatherActionTypes.GeneralError;
  constructor(public payLoad: string) {

  }
}


export type WeatherActions = GetCountriesAction
| GetCountriesSuccessAction
| GetCurrentLocationAction
| GetCurrentLocationSuccessAction
| GetCurrentLocationWeatherSuccessAction
| GeneralErrorAction ;

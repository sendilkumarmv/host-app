import { Action } from '@ngrx/store';

import { City } from '../models/city.model';
import { LocationCoordinates } from '../models/Coordinates.model';

export enum WeatherActionTypes {
  GetCities = '[Weather] Get Cities',
  GetCitiesSuccess = '[Weather] Get Cities Success',

  GetCurrentLocation = '[Weather] Get Current Location',
  GetCurrentLocationSuccess = '[Weather] Get Current Location Success',

  GetCurrentLocationWeatherSuccess = '[Weather] Get Current Location Weather Success',

  GeneralError = "[Weather] General Error"
}

export class GetCitiesAction implements Action {
  readonly type: string = WeatherActionTypes.GetCities;
  constructor(public payLoad: string) {}
}

export class GetCitiesSuccessAction implements Action {
  readonly type: string = WeatherActionTypes.GetCitiesSuccess;
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
  constructor(public payLoad: LocationCoordinates) {
  }
}
/* */

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


export type WeatherActions = GetCitiesAction
| GetCitiesSuccessAction
| GetCurrentLocationAction
| GetCurrentLocationSuccessAction
| GetCurrentLocationWeatherSuccessAction
| GeneralErrorAction ;

import { Action } from '@ngrx/store';

import { IAppState, IWeatherState } from 'src/app/app.state';
import { City } from '../models/city.model';
import { WeatherActionTypes, WeatherActions, GetCountriesAction, GetCountriesSuccessAction } from './weather.actions';


const city : City = {
  country:'',
  name:'',
  coord: {
    lon: '',
    lat: ''
  },
  id:'',
  countryName: ''
}
const initialWeatherState: IWeatherState = {
  cities: [city],
  match:'',
  isLoading: false,
  error:'',
  data: null
}
const initialAppState: IAppState = {
  weatherState: initialWeatherState,
  isLoading: false,
  currentLocation: { lat: '', lon: ''}
}


export function WeatherReducer(state: IAppState = initialAppState, action: WeatherActions) {
  switch(action.type) {
    case WeatherActionTypes.GetCountries: {
      return {
        ...state,
        match: action.payLoad,
        isLoading: true,
        error: ''
      }
    }
    case WeatherActionTypes.GetCountriesSuccess: {
      return {
        ...state,
        cities: (action as GetCountriesSuccessAction)?.payLoad,
        isLoading: false,
        error: ''
      }
    }

    case WeatherActionTypes.GetCurrentLocation: {
      return {
        ...state,
        currentLocation: action.payLoad,
        error: '',
        cities: [],
        isLoading: false
      };
    }

    case WeatherActionTypes.GetCurrentLocationWeatherSuccess: {
      return {
        ...state,
        error: '',
        cities: [],
        isLoading: false,
        data: action.payLoad
      }
    }

    case WeatherActionTypes.GeneralError: {
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
        cities: []
      }
    }
  }

}

import { Action } from '@ngrx/store';

import { IAppState, IWeatherState } from 'src/app/app.state';
import { City } from '../models/city.model';
import { WeatherActionTypes, WeatherActions, GetCitiesSuccessAction, } from './weather.actions';


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
  data: null,
  errorOccured: false,
  dataLoadedStatus: false,
  currentLocation: { lat: '', lon: ''},
}

export function WeatherReducer(state: IWeatherState = initialWeatherState, action: WeatherActions) {
  switch(action.type) {
    case WeatherActionTypes.GetCities: {
      return {
        ...state,
        match: action.payLoad,
        isLoading: true,
        error: ''
      }
    }
    case WeatherActionTypes.GetCitiesSuccess: {
      return {
        ...state,
        cities: (action as GetCitiesSuccessAction)?.payLoad,
        isLoading: false,
        error: ''
      }
    }

    case WeatherActionTypes.GetCurrentLocation: {
      return {
        ...state,
        cities: [],
        isLoading: action.payLoad,
        error: '',
        currentLocation: null
      }
    }

    case WeatherActionTypes.GetCurrentLocationSuccess: {
      return {
        ...state,
        currentLocation: action.payLoad,
        error: '',
        cities: [],
        isLoading: false,
        dataLoadedStatus: false
      };
    }

    case WeatherActionTypes.GetCurrentLocationWeatherSuccess: {
      return {
        ...state,
        error: '',
        cities: [],
        isLoading: false,
        data: action.payLoad,
        dataLoadedStatus: true
      }
    }

    case WeatherActionTypes.GeneralError: {
      return {
        ...state,
        isLoading: false,
        error: action.payLoad,
        errorOccured: true,
        cities: []
      }
    }
  }

}

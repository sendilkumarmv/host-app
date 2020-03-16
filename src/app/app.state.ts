import { City } from './weather/models/city.model';
import { Coordinates } from './weather/models/Coordinates.model';

export interface IWeatherState {
  cities : City[];
  match: string;
  isLoading: boolean;
  error: string;
}
export interface IAppState {
  weatherState: IWeatherState
  isLoading: boolean
  currentLocation: Coordinates;
}

import { City } from './weather/models/city.model';
import { LocationCoordinates } from './weather/models/Coordinates.model';

export interface IWeatherState {
  cities : City[];
  match: string;
  isLoading: boolean;
  error: string;
  data: any;
  errorOccured: boolean;
  canNavigate: boolean;
}
export interface IAppState {
  weatherState: IWeatherState
  isLoading: boolean
  currentLocation: LocationCoordinates;
}

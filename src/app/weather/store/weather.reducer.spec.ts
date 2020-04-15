import { TestBed } from "@angular/core/testing"
import { WeatherReducer } from './weather.reducer';
import { GetCurrentLocationAction, GetCurrentLocationSuccessAction, GetCurrentLocationWeatherSuccessAction } from './weather.actions';
import { IAppState, IWeatherState } from 'src/app/app.state';
import { City } from '../models/city.model';
import { LocationService } from '../services/geolocation.service';
import { ApiService } from '../services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { API_BASE_URL } from '../general';
import { of } from 'rxjs';
import { LocationCoordinates } from '../models/Coordinates.model';

describe('Weather reducer ', () => {
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
    currentLocation: { lat: '', lon: ''}
  }

  let locationService: LocationService;
  let apiService: ApiService;

  let mockWeather = {
    "coord": {
      "lon": "77.65",
      "lat": "13.07"
    },
    "weather" : [{"id": "801", "main": "Clouds", "description": "few clouds", "icon": "http://openweathermap.org/img/wn/02d@2x.png"} ],
    "base": "stations",
    "main": {"temp": "33.63 &deg; C", "feels_like": "30.01 &deg; C", "temp_min": "31.82 &deg; C", "temp_max": "35.15 &deg; C", "pressure": "1013", "humidity": "15"},
    "visibility": "10000",
    "wind": {"speed": "3.1"},
    "clouds": {"all": "20"},
    "dt": "16-04-0051 15:50:34",
    "sys": {"type": "1", "id": "9205", "country": "IN", "sunrise": "06:06", "sunset": "18:31"},
    "timezone": "19800",
    "id": "1252758",
    "name": "Yelahanka",
    "cod": "200"
};


  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
        LocationService,
        { provide: API_BASE_URL, useValue: 'http://localhost:59377' }
      ]
    }).compileComponents();
    locationService = TestBed.get(LocationService);
    apiService = TestBed.get(ApiService);
  })

  it(' should return loading state true', () =>{
    const getlocationAction = new GetCurrentLocationAction(true);
    const newState = WeatherReducer(initialWeatherState, getlocationAction);
    expect(newState.isLoading).toBeTruthy();
  });

  it(' should return location and loading state false', () =>{
    const location: LocationCoordinates = {
      lat: '12',
      lon: '77'
    }
    const getlocationAction = new GetCurrentLocationSuccessAction(location);
    const newState = WeatherReducer(initialWeatherState, getlocationAction);
    expect(newState.isLoading).toBeFalsy();
    expect(newState.currentLocation.lat).toBe('12');
    expect(newState.currentLocation.lon).toBe('77');
  });

  it(' should return the weather data ', () =>{
    const getWeather = new GetCurrentLocationWeatherSuccessAction(mockWeather);
    const newState = WeatherReducer(initialWeatherState, getWeather);
    expect(newState.data.name).toBe("Yelahanka");

  });
})





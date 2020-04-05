import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../general';
import { LocationCoordinates } from '../models/Coordinates.model';
import { Observable, of } from 'rxjs';
import { LocationService } from './geolocation.service';

@Injectable()
export class ApiService {

  constructor(@Inject(API_BASE_URL) private baseUrl,
              private httpClient: HttpClient,
              private geoLocationService: LocationService
            ){}

  getCities(filter: string ) {
    const serviceUrl = `${this.baseUrl}/api/weatherforecast/getcities/${filter}`;
    return this.httpClient.get(serviceUrl);
  }

  getWeatherByCoordinates(coordinates: LocationCoordinates) {
    const serviceUrl = `${this.baseUrl}/api/weatherforecast/getweather/loc/${coordinates.lon}/${coordinates.lat}`;
    return this.httpClient.get(serviceUrl);
  }

  getCurrentLocation() : Observable<LocationCoordinates> {
    return this.geoLocationService.getCurrentCoordinates();
  }

}

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../general';
import { Coordinates } from '../models/Coordinates.model';
import { Observable, of } from 'rxjs';
import { GeolocationService } from './geolocation.service';

@Injectable()
export class ApiService {

  constructor(@Inject(API_BASE_URL) private baseUrl,
              private httpClient: HttpClient,
              private geoLocationService: GeolocationService
            ){}

  getCities(filter: string ) {
    const serviceUrl = `${this.baseUrl}/api/weatherforecast/getcities/${filter}`;
    return this.httpClient.get(serviceUrl);
  }

  getWeatherByCoordinates(coordinates: Coordinates) {
    const serviceUrl = `${this.baseUrl}/api/weatherforecast/getweather/loc/${coordinates.lon}/${coordinates.lat}`;
    return this.httpClient.get(serviceUrl);
  }

  getCurrentLocation() : Observable<any> {

    const location = this.geoLocationService.getLocation({enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 5000});
    return of(location);

  }

}

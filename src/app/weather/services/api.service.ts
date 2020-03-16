import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../general';
import { Coordinates } from '../models/Coordinates.model';

@Injectable()
export class ApiService {

  constructor(@Inject(API_BASE_URL) private baseUrl, private httpClient: HttpClient){}

  getCities(filter: string ) {
    const serviceUrl = `${this.baseUrl}/api/weatherforecast/getcities/${filter}`;
    return this.httpClient.get(serviceUrl);
  }




}

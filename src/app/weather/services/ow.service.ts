import { Injectable } from '@angular/core';
import { Coordinates } from '../models/Coordinates.model'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OpenWeatherService {
  private apiKey = '34327264272d90968fb6aa0d98d1f21d';
  private getWeatherByCoordUrl ="http://pro.openweathermap.org/data/2.5/forecast/hourly?";
  private getWeatherByLocation = "https://api.openweathermap.org/data/2.5/weather?";

  constructor(private httpClient: HttpClient) {

  }

  getHourly(coord: Coordinates) {
    let apiPartUrl = `${this.getWeatherByCoordUrl}lat=${coord.lat}&lon=${coord.lon}&appid=${this.apiKey}`;
  }

  getCurrentByLocation(coord: Coordinates) {
    let url = `lat=${coord.lat}&lon=${coord.lon}&appid=${this.apiKey}`;
    return this.httpClient.get(url);
  }
}

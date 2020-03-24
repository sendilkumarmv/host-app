import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { GetCurrentLocationSuccessAction } from '../store/weather.actions';
import { Coordinates } from '../models/Coordinates.model';

@Component({
  selector: 'app-tiny-info',
  templateUrl: './tiny.component.html',
  styleUrls: ['./tiny.component.css']
})
export class TinyComponent implements OnInit{


  constructor(private store: Store<IAppState>) {

  }
  ngOnInit(): void {
    this.getPosition().then(pos=>
      {
        const location: Coordinates = {
          lat: pos.lat,
          lon: pos.lng
        };
        console.log(location);
        this.store.dispatch(new GetCurrentLocationSuccessAction(location))
      });
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
}

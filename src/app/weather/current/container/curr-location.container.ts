import { OnInit, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { GetCurrentLocationSuccessAction } from '../../store/weather.actions';
import { Coordinates } from '../../models/Coordinates.model';
import { Observable } from 'rxjs';
import { selectWeatherCities, selectWeatherData, selectErrorStatus } from '../../store/weather.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-currlocaiton-container',
  templateUrl: './curr-location.container.html',
  styleUrls: ['./curr-location.container.css']
})
export class CurrLocationContainer implements OnInit{

  public data$: Observable<any>;
  public errorStatus$: Observable<boolean>;
  constructor(private store: Store<IAppState>) {

  }
  ngOnInit(): void {
    this.data$ = this.store.pipe( map((state) => selectWeatherData(state)));
    this.errorStatus$ = this.store.pipe( map((state) => selectErrorStatus(state)));
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

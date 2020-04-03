import { OnInit, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { GetCurrentLocationSuccessAction } from '../../store/weather.actions';
import { LocationCoordinates } from '../../models/Coordinates.model';
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
  constructor(private store: Store<IAppState>) {

  }
  ngOnInit(): void {
    this.data$ = this.store.pipe( map((state) => selectWeatherData(state)));
  }

}

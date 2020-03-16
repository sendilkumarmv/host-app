import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/app.state';
import { Store, select } from '@ngrx/store';
import { GetCountriesAction } from '../../store/weather.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { City } from '../../models/city.model';
import { selectWeatherCities, selectLoadingStatus, selectError } from '../../store/weather.selectors';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-city-list.container',
  templateUrl: './city-list.container.html',
  styleUrls: ['./city-list.container.css']
})
export class CityListContainer implements OnInit {

  public cities$: Observable<City[]>;
  public isLoading$: Observable<boolean>;
  public error$: Observable<string>;
  constructor(private store: Store<IAppState>, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.cities$ = this.store.pipe(map((state) => selectWeatherCities(state)));
    this.isLoading$ = this.store.pipe(map((state) => selectLoadingStatus(state)));
    this.error$ = this.store.pipe(map((state) => selectError(state)));

    this.error$.pipe(
      debounceTime(1000),
      filter(error => error ? true : false)
      ).subscribe((error) => {
        console.log(error);
        this.toastrService.error(error,'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-right'
        })
    })
  }

  handleAutoComplete(event) {
    if(event.length >2) {
      this.store.dispatch(new GetCountriesAction(event));
    }
  }

}

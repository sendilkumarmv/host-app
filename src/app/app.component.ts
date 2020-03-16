import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppState } from './app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectLoadingStatus } from './weather/store/weather.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'host-app';
  public isLoading$: Observable<boolean>;
  constructor(private store: Store<IAppState>) {

  }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(map((state) => selectLoadingStatus(state)));
  }
}

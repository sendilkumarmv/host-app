import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IAppState } from 'src/app/app.state';
import { Store, select } from '@ngrx/store';
import { OnInit } from '@angular/core';
import { selectLocationDataLoadedStatus } from '../store/weather.selectors';
import { tap, filter, first } from 'rxjs/operators';
import { GetCurrentLocationAction } from '../store/weather.actions';


export class RouteGurdService implements CanActivate, OnInit {

  constructor(private store: Store<IAppState>) {

  }

  ngOnInit(): void {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(selectLocationDataLoadedStatus),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new GetCurrentLocationAction(true));
        }
      }),
      filter(loaded => loaded),
      first()
    );
  }

}

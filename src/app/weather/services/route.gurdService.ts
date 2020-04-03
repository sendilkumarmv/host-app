import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IAppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { GetCurrentLocationAction } from '../store/weather.actions';
import { map, debounceTime } from 'rxjs/operators';
import { selectCanNavigate } from '../store/weather.selectors';
import { OnInit } from '@angular/core';


export class RouteGurdService implements CanActivate, OnInit {

  public canNavigate$: Observable<boolean>;
  constructor(private store: Store<IAppState>) {

  }

  ngOnInit(): void {
    this.canNavigate$ = this.store.pipe( map((state) => selectCanNavigate(state)));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(new GetCurrentLocationAction(false));
    console.log(this.canNavigate$);
    return this.canNavigate$;
  }

}

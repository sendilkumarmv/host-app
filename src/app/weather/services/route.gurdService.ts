import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IAppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { GetCurrentLocationAction } from '../store/weather.actions';


export class RouteGurdService implements CanActivate {

  constructor(private store: Store<IAppState>) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(new GetCurrentLocationAction(true))
    return of(true)
  }

}

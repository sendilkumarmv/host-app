import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { LocationCoordinates } from '../models/Coordinates.model';

@Injectable()
export class LocationService {

	public getCurrentCoordinates(): Observable<LocationCoordinates> {

		return Observable.create( (observer) => {

			if (window.navigator && window.navigator.geolocation) {
				window.navigator.geolocation.getCurrentPosition(
					(position) => {
            var locCoord : LocationCoordinates = {
              lat: position.coords.latitude.toString(),
              lon: position.coords.longitude.toString()
            }
						observer.next(locCoord);
            observer.complete();
					},
					(error) => {
						switch (error.code) {
							case 1:
								observer.error('Location access of this device denied!');
								break;
							case 2:
								observer.error('Unable to determin your device location!');
								break;
							case 3:
								observer.error('Location not determined within time!');
								break;
						}
					},
					{
						enableHighAccuracy: true,
						timeout: 1000,
						maximumAge: 0
					});
			}
			else {
				observer.error('Current device browser is not supporting!');
			}

		});
	}
}

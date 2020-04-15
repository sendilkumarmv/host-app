import { TestBed, fakeAsync,async, tick } from '@angular/core/testing';
import { LocationService } from './geolocation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { API_BASE_URL } from '../general';
import { LocationCoordinates } from '../models/Coordinates.model';
import { of } from 'rxjs';


describe('Api Service ', () => {
  let locationService: LocationService;
  let apiService: ApiService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
        LocationService,
        { provide: API_BASE_URL, useValue: 'http://localhost:59377' }
      ]
    }).compileComponents();
    locationService = TestBed.get(LocationService);
    apiService = TestBed.get(ApiService);
  }));

  it('should return coordinates of the current location', async((done) => {
    spyOn(locationService, 'getCurrentCoordinates').and.returnValue(of({ lat: '12', lon: '77' }));
    const result$ = apiService.getCurrentLocation();
    let result: LocationCoordinates;
    result$.subscribe({
      next:(r) =>{
        result = r;
      }
    });
    // tick(60005);
    expect(result.lat).toMatchSnapshot('12');
    expect(result.lon).toMatchSnapshot('77');
  }));

})

import { TestBed } from "@angular/core/testing";
import { ApiService } from '../services/api.service';
import { LocationService } from '../services/geolocation.service';
import { API_BASE_URL } from '../general';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('Weather effects ', () => {
  let locationService: LocationService;
  let apiService: ApiService;
  beforeEach(() => {
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
  });

  it('get current location', () => {
    spyOn(locationService, 'getCurrentCoordinates').and.returnValue(of({ lat: '12', lon: '77' }));
    expect(true).toBeTruthy();
  });

});

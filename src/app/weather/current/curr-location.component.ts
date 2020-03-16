import { OnInit, Component } from '@angular/core';
import { Coordinates } from '../models/Coordinates.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-curr-location',
  templateUrl: './curr-location.component.html',
  styleUrls: ['./curr-location.component.css']
})
export class CurrLocationComponent implements OnInit {

  coord$: Observable<Coordinates>;
  data = null;
  msg: string;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);
         const apiKey = '34327264272d90968fb6aa0d98d1f21d';
         let url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&appid=${apiKey}`
        this.http.get(url).subscribe((result) => {
            console.log(result)
            this.data = of(result);
          }
        )
      });;
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

  getIcon(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }
  getFlags(countryCode: string) {
    return `https://www.countryflags.io/${countryCode.toLowerCase()}/flat/24.png`;
  }

  covertToDate(unix_timestamp, onlyTime = false) {
      var date = new Date(unix_timestamp * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      if(onlyTime)
        return  hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      else
        return date;
  }

}


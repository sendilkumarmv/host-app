import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, debounce, debounceTime } from 'rxjs/operators';
import { City } from '../../models/city.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  @Output() onAutoComplete = new EventEmitter<string>();
  @Input() cities: City[];
  @Input() isLoading: boolean;

  cityCtrl = new FormControl();

  displayedColumns = ['id', 'name', 'countryName','country'];

  ngOnInit(): void {

  }

  constructor() {
    this.cityCtrl.valueChanges
    .pipe(
      debounceTime(1000)
    ).subscribe((value) => this.onAutoComplete.emit(value));
  }

  getFlags(countryCode: string) {
    // return `./assets/flags/${countryCode.toLowerCase()}.png`;
    return `https://www.countryflags.io/${countryCode.toLowerCase()}/flat/24.png`;
  }

}

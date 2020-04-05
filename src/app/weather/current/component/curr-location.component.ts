import { OnInit, Component, Input } from '@angular/core';
import { LocationCoordinates } from '../../models/Coordinates.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-curr-location',
  templateUrl: './curr-location.component.html',
  styleUrls: ['./curr-location.component.css']
})
export class CurrLocationComponent implements OnInit {

  @Input() data = null;
  msg: string;
  constructor() {

  }

  ngOnInit(): void {

  }


}


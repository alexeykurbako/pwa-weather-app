import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private http: HttpClient) { }

  readonly $weather = this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=ccf56dbfffc560704ae2781de7f967d3&units=metric');

  ngOnInit(): void {
  }

}

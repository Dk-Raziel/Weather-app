import { WeatherApiService } from '@core/services/weather-api.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private weatherService: WeatherApiService
  ) { }

  ngOnInit() {
    combineLatest(
      this.weatherService.getWeather('London'),
      this.weatherService.getWeather('Amsterdam')
    ).subscribe(
      res => console.log(res)
    );
  }

}

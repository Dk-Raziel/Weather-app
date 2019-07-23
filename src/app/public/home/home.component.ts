import { CityInfo } from '@shared/models/city-info.model';
import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

import { WeatherApiService } from '@core/services/weather-api.service';
import { CityForecast } from '@shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  $citiesInfo: Observable<CityInfo[]>;
  $cityForecast: Observable<CityForecast>;
  constructor(
    private weatherService: WeatherApiService
  ) { }

  ngOnInit() {
    this.$citiesInfo = combineLatest(
      this.weatherService.getWeather('Amsterdam'),
      this.weatherService.getWeather('London'),
      this.weatherService.getWeather('Madrid'),
      this.weatherService.getWeather('Rome'),
      this.weatherService.getWeather('Paris')
    );
  }

  getForecast(city: string) {
    this.$cityForecast = this.weatherService.getForecast(city);
  }
}

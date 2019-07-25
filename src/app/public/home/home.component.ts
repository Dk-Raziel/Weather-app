import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { style, animate, transition, trigger } from '@angular/animations';

import { WeatherApiService } from '@core/services/weather-api.service';
import { CityForecast, CityInfoFormatted } from '@shared/models';

/** Home and landing page
 *
 * Will display a list of City Cards components and when clicked, the chart with temperatures will fetch data for that specific city
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(250, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  /** Array of CityInfoFormated Observables fetched from the Weather Api Service. handled with combineLatest method */
  $citiesInfo: Observable<CityInfoFormatted[]>;

  /** CityForecast Observable fetched from the Weather Api Service */
  $cityForecast: Observable<CityForecast>;

  /** @ignore */
  constructor(
    private weatherService: WeatherApiService
  ) { }

  /** Initializing the observables to be used on the component, currently hardcoded. */
  ngOnInit() {
    this.$citiesInfo = combineLatest(
      this.weatherService.getWeather('Amsterdam'),
      this.weatherService.getWeather('London'),
      this.weatherService.getWeather('Madrid'),
      this.weatherService.getWeather('Rome'),
      this.weatherService.getWeather('Paris')
    );
    this.$cityForecast = this.weatherService.getForecast('Amsterdam');
  }

  /** Fetchs the forecast for the city of the interacted card */
  getForecast(city: string) {
    this.$cityForecast = this.weatherService.getForecast(city);
  }
}

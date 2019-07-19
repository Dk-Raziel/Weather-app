import { WeatherApiService } from '@core/services/weather-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: any;

  constructor(
    private weatherService: WeatherApiService
  ) { }

  ngOnInit() {
    this.weatherService.getWeather('London')
    .subscribe(res => {
      this.data = res;
      console.log(res);
    })
  }

}

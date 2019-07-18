import { WeatherApiService } from './../../core/services/weather-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private weatherService: WeatherApiService
  ) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(res => console.log(res))
  }

}

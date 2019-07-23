import { Component, OnInit, Input } from '@angular/core';
import { CityInfo } from '@shared/models';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {
  @Input() cityInfo: CityInfo;

  constructor() { }

  ngOnInit() {
  }

  get averageTemp(): string {
    const cityTemps = this.cityInfo.main;
    return ((cityTemps.temp_max + cityTemps.temp_min) / 2).toFixed(0);
  }

  // I wasn't really sure if it was expected of me to use the "original" icons or to use ones with my criteria, like using Fonts Awesome
  // So I went for the easiest approach and used the original.
  get skyIcon(): string {
    const condition = this.cityInfo.weather[0].icon;
    return `http://openweathermap.org/img/wn/${condition}.png`;
  }

  get degToCompass() {
    const wind = this.cityInfo.wind.deg;
    const val = Math.floor((wind / 22.5) + 0.5);
    const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return arr[(val % 16)];
  }

}

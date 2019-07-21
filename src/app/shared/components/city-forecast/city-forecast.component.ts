import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {
  @Input() forecastInfo: any;
  chartInfo: any;
  chart: any;

  constructor() { }

  ngOnInit() {
    const foreList = this.forecastInfo.list;
    const maxTemp = foreList.map(res => res.main.temp_max);
    const minTemp = foreList.map(res => res.main.temp_min);
    const weatherDates = foreList.map(res => {
      const date = new Date(res.dt * 1000);
      return date.toLocaleTimeString('en', { weekday: 'short', hour: '2-digit', minute: '2-digit' });
    });


    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          {
            data: maxTemp,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: minTemp,
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { CityForecast } from '@shared/models';

/**
 * Will display a Forecast chart using Chart.js with information received via `forecastInfo` input
 */
@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {
  /** Received a CityForecast object to be displayed as a chart */
  @Input() forecastInfo: CityForecast;

  /** Chart object configuration */
  chart: Chart;

  /** @ignore */
  constructor() { }

  /** Draws chart */
  ngOnInit() {
    this.drawChart();
  }

  /** Calculate and maps all the necesary values to populate a Chart Object that will be used to display the temperatures of the city */
  drawChart() {
    const foreList = this.forecastInfo.list;
    const maxTemp = foreList.map(res => res.main.temp_max);
    const minTemp = foreList.map(res => res.main.temp_min);
    const weatherDates = foreList.map(res => {
      const date = new Date(res.dt * 1000);
      return date.toLocaleTimeString('en', { weekday: 'short', hour: '2-digit', minute: '2-digit' });
    });


    this.chart = new Chart('cf__canvas', {
      type: 'line',
      data: {
        labels: weatherDates,
        datasets: [
          {
            data: maxTemp,
            borderColor: '#F37335',
            fill: false
          },
          {
            data: minTemp,
            borderColor: '#2980B9',
            fill: false
          }
        ]
      },
      options: {
        animations: false,
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

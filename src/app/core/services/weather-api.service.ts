import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityInfo, CityForecast, CityInfoFormatted } from '@shared/models';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment.prod';

/** Open Weather API calls handler */
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  /** Open Weather base api url */
  private url = environment.open_weather_base_api_url;

  /** Default parameters needed for the Open Weather API */
  private params = new HttpParams()
    .set('APPID', `${environment.open_weather_key}`)
    .set('units', 'metric');

  /** @ignore */
  constructor(
    private http: HttpClient
  ) { }

  /** Will fetch current weather info for the city sent as argument */
  getWeather(city: string): Observable<CityInfoFormatted> {
    const auxParams = this.params.set('q', city);
    return this.http.get<CityInfo>(`${this.url}/weather`, { params: auxParams })
      .pipe(map(this.formatWeatherCall));
  }

  /** Will fetch forecast info for the city sent as argument */
  getForecast(city: string): Observable<CityForecast> {
    const auxParams = this.params.set('q', city);
    return this.http.get<CityForecast>(`${this.url}/forecast`, { params: auxParams });
  }

  /** Api response formatter, adding extra information like icon fetch url, compass direction and an temperature average */
  private formatWeatherCall(res: CityInfo): CityInfoFormatted {
    const cityTemps = res.main;
    const iconType = res.weather[0].icon;
    const wind = res.wind.deg;
    const degreeHelper = Math.floor((wind / 22.5) + 0.5);
    const compassDirections = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];

    const auxResponse: CityInfoFormatted = {
      ...res,
      mapped_info: {
        sky_icon_url: `http://openweathermap.org/img/wn/${iconType}.png`,
        compass_direction: compassDirections[(degreeHelper % 16)],
        average_temp: ((cityTemps.temp_max + cityTemps.temp_min) / 2).toFixed(0)
      }
    };
    return auxResponse;
  }
}

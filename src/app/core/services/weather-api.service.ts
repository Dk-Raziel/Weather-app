import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityInfo } from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private url = 'https://api.openweathermap.org/data/2.5';
  private params = new HttpParams()
                  .set('APPID', 'fee18f34c8778a20c14306ed2d9e34a9')
                  .set('units', 'metric');

  constructor(
    private http: HttpClient
  ) { }

  getWeather(city: string): Observable<CityInfo> {
    const auxParams = this.params.set('q', city);
    return this.http.get<CityInfo>(`${this.url}/weather`, { params: auxParams });
  }

  getForecast(city: string): Observable<any> {
    const auxParams = this.params.set('q', city);
    return this.http.get<any>(`${this.url}/forecast`, { params: auxParams });
  }
}

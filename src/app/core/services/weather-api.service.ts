import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private url = 'https://api.openweathermap.org/data/2.5/weather';
  private params = new HttpParams().set('APPID', 'fee18f34c8778a20c14306ed2d9e34a9');

  constructor(
    private http: HttpClient
  ) { }

  getWeather(city: string): Observable<any> {
    const auxParams = this.params.set('q', city);
    return this.http.get(this.url, {params: auxParams});
  }
}

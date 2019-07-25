import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WeatherApiService } from './weather-api.service';
import { cityInfoMock } from '@assets/mocks';

describe('WeatherApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: WeatherApiService = TestBed.get(WeatherApiService);
    expect(service).toBeTruthy();
  });

  it('should format correctly the responses', () => {
    const service: WeatherApiService = TestBed.get(WeatherApiService);
    const formattedResponse = (service as any).formatWeatherCall(cityInfoMock);
    expect(formattedResponse.mapped_info).toBeTruthy();
  });
});

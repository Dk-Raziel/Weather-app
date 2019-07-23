import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CityCardComponent, CityForecastComponent } from '@shared/components';
import { MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherApiService } from '@core/services/weather-api.service';
import { of } from 'rxjs';
import { CityInfoObject } from '@shared/models';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, CityCardComponent, CityForecastComponent],
      imports: [HttpClientTestingModule, MatProgressSpinnerModule, MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load home page', () => {
    expect(component).toBeTruthy();
  });

  it('should display spinner when data has not yet been feetchd', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.$citiesInfo = undefined;
    fixture.detectChanges();
    expect(compiled.querySelector('mat-progress-spinner')).toBeTruthy();
  });

  it('should display card when correct data is fetched', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.$citiesInfo = of([new CityInfoObject()]);
    fixture.detectChanges();
    expect(compiled.querySelector('app-city-card')).toBeTruthy();
  });
});

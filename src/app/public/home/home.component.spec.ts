import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CityCardComponent, CityForecastComponent } from '@shared/components';
import { MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { TruncatePipe } from '@shared/pipes/truncate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { cityInfoMock, cityForecastMock } from '@assets/mocks/';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, CityCardComponent, CityForecastComponent, TruncatePipe],
      imports: [HttpClientTestingModule, MatProgressSpinnerModule, MatCardModule, BrowserAnimationsModule]
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
    component.$citiesInfo = of([cityInfoMock]);
    fixture.detectChanges();
    expect(compiled.querySelector('app-city-card')).toBeTruthy();
  });

  it('should not display forecast if there is no forecast info', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.$cityForecast = null;
    fixture.detectChanges();
    expect(compiled.querySelector('app-city-forecast')).toBeFalsy();
  });

  it('should  display forecast if there is forecast info', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.$cityForecast = of(cityForecastMock);
    fixture.detectChanges();
    expect(compiled.querySelector('app-city-forecast')).toBeTruthy();
  });

});

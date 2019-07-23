import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityForecastComponent } from './city-forecast.component';
import { CityForecastObject } from '@shared/models';
import { MatCardModule } from '@angular/material';

describe('CityForecastComponent', () => {
  let component: CityForecastComponent;
  let fixture: ComponentFixture<CityForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityForecastComponent],
      imports: [MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityForecastComponent);
    component = fixture.componentInstance;
    component.forecastInfo = new CityForecastObject();
    fixture.detectChanges();
  });

  it('should create forecast component', () => {
    expect(component).toBeTruthy();
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityForecastComponent } from './city-forecast.component';
import { MatCardModule } from '@angular/material';
import { cityForecastMock } from '@assets/mocks';

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
    component.forecastInfo = cityForecastMock;
    fixture.detectChanges();
  });

  it('should create forecast component', () => {
    expect(component).toBeTruthy();
  });

});

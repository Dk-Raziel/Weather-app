import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardComponent } from './city-card.component';
import { MatCardModule } from '@angular/material';
import { CityInfoObject } from '@shared/models';

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityCardComponent],
      imports: [MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCardComponent);
    component = fixture.componentInstance;
    component.cityInfo = new CityInfoObject();
    fixture.detectChanges();
  });

  it('should create the card component', () => {
    expect(component).toBeTruthy();
  });
});

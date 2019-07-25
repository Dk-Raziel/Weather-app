import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardComponent } from './city-card.component';
import { MatCardModule } from '@angular/material';
import { TruncatePipe } from '@shared/pipes/truncate.pipe';
import { cityInfoMock } from '@assets/mocks/';

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityCardComponent, TruncatePipe],
      imports: [MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCardComponent);
    component = fixture.componentInstance;
    component.cityInfo = cityInfoMock;
    fixture.detectChanges();
  });

  it('should create the card component', () => {
    expect(component).toBeTruthy();
  });
});

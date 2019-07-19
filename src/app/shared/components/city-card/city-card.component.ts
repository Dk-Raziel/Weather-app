import { Component, OnInit, Input } from '@angular/core';
import { CityInfo } from '@shared/models';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {
  @Input() cityInfo: CityInfo;

  constructor() { }

  ngOnInit() {
  }

}

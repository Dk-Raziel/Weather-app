import { Component, OnInit, Input } from '@angular/core';
import { CityInfoFormatted } from '@shared/models';

/**
 * City Card component
 *
 * Will display a card with city weather info received from `cityInfo` input
 */
@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {
  /** Receives a `CityInfoFormated` type object */
  @Input() cityInfo: CityInfoFormatted;

  /** @ignore */
  constructor() { }

  /** @ignore */
  ngOnInit() {
  }

}

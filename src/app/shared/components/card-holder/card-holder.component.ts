import { Component, OnInit, Input } from '@angular/core';
import { CityInfo } from '@shared/models';

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.scss']
})
export class CardHolderComponent implements OnInit {
  @Input() cardsData: CityInfo[];

  constructor() { }

  ngOnInit() {
  }

}

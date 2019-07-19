import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCardComponent } from './city-card/city-card.component';
import { CardHolderComponent } from './card-holder/card-holder.component';



@NgModule({
  declarations: [
    CityCardComponent,
    CardHolderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CityCardComponent,
    CardHolderComponent
  ]
})
export class ComponentsModule { }

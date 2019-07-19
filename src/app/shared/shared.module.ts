import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { CityCardComponent } from './components';


@NgModule({
  declarations: [
    CityCardComponent
  ],
  imports: [
    CommonModule,

    MatCardModule
  ],
  exports: [
    MatCardModule,

    CityCardComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { CityCardComponent, CityForecastComponent } from './components';


@NgModule({
  declarations: [
    CityCardComponent,
    CityForecastComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,

    CityCardComponent,
    CityForecastComponent
  ]
})
export class SharedModule { }

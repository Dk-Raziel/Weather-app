import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { CityCardComponent } from './components';


@NgModule({
  declarations: [
    CityCardComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,

    CityCardComponent
  ]
})
export class SharedModule { }

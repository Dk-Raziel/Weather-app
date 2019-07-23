import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import { CityCardComponent, CityForecastComponent } from './components';
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [
    CityCardComponent,
    CityForecastComponent,
    TruncatePipe
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
    CityForecastComponent,

    TruncatePipe
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './services/cars.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [CarHomeComponent],
  exports: [CarHomeComponent],
  providers: [CarsService]
})
export class CarToolModule { }

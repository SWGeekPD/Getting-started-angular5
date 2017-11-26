import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {
  public cars: Car[] = [];
  constructor(private carServ: CarsService) { }

  ngOnInit() {
    // this.httpClient.get<Car[]>('http://localhost:3050/cars').subscribe(cars => {
    //   this.cars = cars;
    // });

    this.carServ.all().then(cars => {
      this.cars = cars;
    });
  }

}

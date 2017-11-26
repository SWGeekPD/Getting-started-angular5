import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../../models/car';
@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {
  public cars: Car[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<Car[]>('http://localhost:3050/cars').subscribe(cars => {
      this.cars = cars;
    });
  }

}

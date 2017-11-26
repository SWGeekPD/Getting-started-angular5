import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';

@Injectable()
export class CarsService {

  private baseUrl = 'http://localhost:3050/cars';
  constructor(private httpClient: HttpClient) { }
  all = () => this.httpClient.get<Car[]>(this.baseUrl).toPromise();

}

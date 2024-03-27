import { Component, OnInit} from '@angular/core';
import { HomeComponent } from '../home/home.component';
const jsonURL: string = '../../assets/db.json'

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.scss']
})

export class FordComponent implements OnInit {
  cars: any[] = [];
  fordCars: any[] = [];

  ngOnInit(): void {
    fetch(jsonURL)
      .then(response => response.json())
      .then(data => {
        this.cars = data;
        for (let car of this.cars) {
          if (car.brand === "Ford") {
            this.fordCars.push(car);
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
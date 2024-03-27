import { Component, OnInit } from '@angular/core';
const jsonURL: string = '../../assets/db.json'

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss']
})

export class FiatComponent implements OnInit {
  cars: any[] = [];
  fiatCars: any[] = [];

  ngOnInit(): void {
    fetch(jsonURL)
      .then(response => response.json())
      .then(data => {
        this.cars = data;
        for (let car of this.cars) {
          if (car.brand === "Fiat") {
            this.fiatCars.push(car);
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
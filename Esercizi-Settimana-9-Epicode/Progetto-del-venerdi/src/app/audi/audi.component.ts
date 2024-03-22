import { Component, OnInit } from '@angular/core';
const jsonURL: string = '../../assets/db.json'

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})

export class AudiComponent implements OnInit {
  cars: any[] = [];
  AudiCars: any[] = [];

  ngOnInit(): void {
    fetch(jsonURL)
      .then(response => response.json())
      .then(data => {
        this.cars = data;
        for (let car of this.cars) {
          if (car.brand === "Audi") {
            this.AudiCars.push(car);
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
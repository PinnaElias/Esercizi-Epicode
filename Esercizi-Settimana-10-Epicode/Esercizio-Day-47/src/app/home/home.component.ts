import { AfterViewInit, Component, OnInit } from '@angular/core';
const jsonURL: string = '../../assets/db.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  cars: any[] = [];
  randomIndexA: number = 0;
  randomIndexB: number = 0;

  ngOnInit(): void {
    fetch(jsonURL)
      .then(response => response.json())
      .then(data => {
        this.cars = data;
        this.randomIndexA = Math.floor(Math.random() * this.cars.length);
        do {
          this.randomIndexB = Math.floor(Math.random() * this.cars.length);
        } while (this.randomIndexB === this.randomIndexA);
      }
      )
      .catch(error => {
        console.log(error)
      });
  }
}




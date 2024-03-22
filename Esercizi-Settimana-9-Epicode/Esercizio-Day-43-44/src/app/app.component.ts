import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
  <a [routerLink]="['/']" routerLinkActive="router-link-active"> Home </a>
  <a [routerLink]="['/post-active']" routerLinkActive="router-link-active"> Active Posts </a>
  <a [routerLink]="['/post-inactive']" routerLinkActive="router-link-active"> Inactive Posts </a> 
  `
})
export class AppComponent {
  title = 'soluzione2';
}

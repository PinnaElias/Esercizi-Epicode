import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiatComponent } from './fiat/fiat.component';
import { AudiComponent } from './audi/audi.component';
import { FordComponent } from './ford/ford.component';
import { CarrelloComponent } from './carrello/carrello.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  }, 
  {
    path: 'fiat',
    component: FiatComponent
  },
  {
    path: 'ford',
    component: FordComponent
  },
  {
    path: 'audi',
    component: AudiComponent
  },
  {
    path: 'carrello',
    component: CarrelloComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FiatComponent,
    AudiComponent,
    FordComponent,
    CarrelloComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

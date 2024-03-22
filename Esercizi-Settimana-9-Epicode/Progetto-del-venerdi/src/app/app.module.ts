import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FiatComponent } from './fiat/fiat.component';
import { FordComponent } from './ford/ford.component';
import { AudiComponent } from './audi/audi.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'fiat', component: FiatComponent },
  { path: 'ford', component: FordComponent },
  { path: 'audi', component: AudiComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FiatComponent,
    FordComponent,
    AudiComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

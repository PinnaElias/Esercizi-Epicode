import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.interface';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  apiUrl = "https://jsonplaceholder.typicode.com/photos";
  favoritesSub = new Subject<number>();
  favoritesCounter = 0;
  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get<Photo[]>(this.apiUrl).pipe(catchError(err => { //QUESTA E' LA FETCH FATTA IN GRAZIA DI DIO
      return throwError(this.getErrorMessage(err.status))
    }));
  }

  getErrorMessage(status: number) { //qui creiamo i messaggi di errore per ogni caso
    let message = '';
    switch(status) {
      case 404:
      message: ' mamma aiuto, non trovo nulla D: '; //errore specifico che ci aspettiamo sia piùprobabile trovare
      break;

      default:
        message: 'sta succedendo un casino, non ci capisco nulla, riprova'; //tutto il resto
        break;
    } return message;
  }
}

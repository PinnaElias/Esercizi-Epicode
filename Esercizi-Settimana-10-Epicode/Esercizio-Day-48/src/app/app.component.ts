import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Photo } from './models/photo.interface';
import { PhotosService } from './services/photos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  photos: Photo[] | undefined;
  constructor(private PhotoSrv: PhotosService) { }

ngOnInit(): void {
  this.readPhotos();
}

  readPhotos() {
    this.PhotoSrv.getPhotos().subscribe((photos) => {
      this.photos = photos
    }, (err => {
      alert(err);
    }));
  }
}

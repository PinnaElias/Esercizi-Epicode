import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

}
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  active: boolean;
}
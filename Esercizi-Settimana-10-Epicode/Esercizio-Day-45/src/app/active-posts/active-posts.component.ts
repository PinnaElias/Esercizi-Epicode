import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  active!: PostInterface[]

  constructor(private postsService: PostsService) {
    this.active = this.activePosts();
  }

  activePosts(): PostInterface[] {
    return this.postsService.getPosts().filter((post) => post.active);
  }
}
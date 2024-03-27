import { Component } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {
  inactive!: PostInterface[]
  constructor(private postsService: PostsService) {
    this.inactive = this.inactivePosts
  }
  get inactivePosts(): PostInterface[] {
    return this.postsService.getPosts().filter((post) => !post.active);
  }
}

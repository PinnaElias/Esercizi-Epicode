import { Component, ViewChild } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  post!: PostInterface
  related: PostInterface[] = [];

  @ViewChild("singlePost") singlePost!: SinglePostComponent

  constructor(private postsService: PostsService) {
    this.post = this.topPost
    this.related = this.getRandomPosts(4)

  }
  get topPost(): PostInterface {
    return this.postsService.getPosts().sort((a, b) => b.reactions - a.reactions)[0];
  }
  getRandomPosts(num: number): PostInterface[] {
    const randomPosts: PostInterface[] = [];
    const numHistory: number[] = [];
    for (let i = 0; i < num; i++) {
      const random = Math.floor(Math.random() * this.postsService.getPosts().length);
      if (numHistory.includes(random)) continue;
      numHistory.push(random);
      randomPosts.push(this.posts[random]);
    }
    return randomPosts;
  }
  editPost() {
    alert("Edit successful!")
  }
}

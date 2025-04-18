import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOCK_POSTS, BlogPost } from '../src/app/mock-posts';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-blog-post',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  private route = inject(ActivatedRoute)
  post: BlogPost | undefined;

  constructor() {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.post = MOCK_POSTS.find(post => post.id === postId);
  }
}

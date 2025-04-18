import { Component } from '@angular/core';
import { MOCK_POSTS, BlogPost } from '../src/app/mock-posts';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  imports: [RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  posts: BlogPost[] = MOCK_POSTS; 

}

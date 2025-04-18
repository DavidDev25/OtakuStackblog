// src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
import { BlogPostComponent } from '../../blog-post/blog-post.component';

export const serverRoutes: ServerRoute[] = [
  { 
    path: 'blog/:id', 
    component: BlogPostComponent,
    renderMode: RenderMode.Server // SSR für diese Route
  },
  { 
    path: '**', 
    renderMode: RenderMode.Server // SSR für alle anderen Routen (optional)
  }
];

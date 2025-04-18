import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { BlogListComponent } from '../../blog-list/blog-list.component';
import { BlogPostComponent } from '../../blog-post/blog-post.component';
import { AboutComponent } from '../../about/about.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'blog', component: BlogListComponent},
    {path: 'blog/:id', component: BlogPostComponent},
    {path: 'about', component: AboutComponent},
];

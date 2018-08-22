import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { EditorComponent } from './editor/editor.component';
import {RouterModule} from '@angular/router';
import {PostsRoutingModule} from './posts-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PostsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PostComponent, PostsComponent, EditorComponent],
  exports: [PostComponent, PostsComponent, EditorComponent]
})
export class PostsModule { }

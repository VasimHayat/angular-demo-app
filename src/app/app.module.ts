import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './header/header.component';
import { AppPostsPanelComponent } from './story-panel/app-posts-panel.component';
import { AppTagPipe } from './story-panel/pipes/app-tag.pipe';
import { AppBlogPostComponent } from './story-panel/blog-post/app-blog-post.component';

@NgModule({
  declarations: [
    AppComponent, AppHeaderComponent, AppPostsPanelComponent,AppTagPipe,AppBlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

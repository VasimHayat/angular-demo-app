import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UserPost } from "../model/user.posts";

@Component({
    selector:'blog-post',
    templateUrl:'app-blog-post.component.html',
    styleUrls:['app-blog-post.component.scss']
})
export class AppBlogPostComponent{

    @Input() blogPost : UserPost = null;

    @Output() deleteAction =  new EventEmitter(); 

    deletePost(){
        this.deleteAction.emit(this.blogPost.id);
    }

}
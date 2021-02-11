import {Component} from '@angular/core';

import {userPostData } from '../../utils/data.user.post'; 

import { UserPost } from './model/user.posts';

@Component({
    selector:'posts-panel',
    templateUrl:'app-posts-panel.component.html',
    styleUrls:['app-posts-panel.component.scss']
}) 

export class AppPostsPanelComponent{

    userPostArray:Array<UserPost> = [];

   constructor(){
    for(let i=0;i<userPostData.data.length;i++){
        this.userPostArray.push(new UserPost(userPostData.data[i])) ;
    }
   } 


   deleteAction(blogPostId:string,extraParam:any){
       for(let i=0;i<this.userPostArray.length;i++){
           if(this.userPostArray[i].id == blogPostId){
            this.userPostArray.splice(i,1);
             break;
           }
       } 
   }
   
}
 

export class User{
    id:string;
    firstName:string;
    lastName:string;
    picture:string;
    title:string;
    email:string;
    
    constructor(user:User){
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.picture = user.picture;
        this.title = user.title;
        this.email = user.email;
    }
}

export class UserPost{
    user:User;
    id:string;
    image:string;
    publishDate:string;
    text:string;
    link:string;
    likes:number;
    tags:Array<string> = [];

    constructor(userEvent:any){

        this.id= userEvent.id;
        this.image = userEvent.image;
        this.image = userEvent.image;
        this.publishDate = userEvent.publishDate;
        this.text = userEvent.text;
        this.link = userEvent.link;
        this.likes = userEvent.likes;
        this.tags = userEvent.tags;
        this.user = userEvent.owner;
    } 

}
 
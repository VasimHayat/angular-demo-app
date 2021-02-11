import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'appTagPipe'
})
export class AppTagPipe implements PipeTransform {
    
    transform(tag: Array<string>, isUpperCase: boolean = false) {
        let tagVal = tag.concat().toString();
        return (isUpperCase?tagVal.toUpperCase():tagVal.toLocaleLowerCase());
      }
}



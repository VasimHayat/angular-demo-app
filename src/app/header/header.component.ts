import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.scss']
})
export class AppHeaderComponent implements OnInit{
   title = 'Hubworks';
   logoUrl='https://cdn.xyz.com/ssoprod/202101271233/assets/images/icons/hubworks_white_bk.png';


   constructor(private http: HttpClient) { }
    ngOnInit(): void {
        this.getData().subscribe(resp =>{
            console.log(resp)
        })
    }

  getData(): Observable<any> {  
   const headers= new HttpHeaders()
  .set('app-id', '5fdc783bf327cd7a0923ef80') //'6006b2e50b2b6f8791b9d7d9'

    //const url = "https://dummyapi.io/data/api/post?limit=100"
    const url ="https://dummyapi.io/data/api/tag/fun/post?limit=100";
    return this.http.get<any>(url, {headers})
  }
 
 
 
}

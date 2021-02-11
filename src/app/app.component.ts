import { Component } from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'demo-app';


  clickAction(){
      document.getElementById('content').innerHTML ='Update html';
  }
}


 
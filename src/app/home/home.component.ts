import { Component, OnInit } from '@angular/core';
import {SlideMenuModule,MenuItem} from 'primeng/primeng';

@Component({
    selector :'home-component',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit{
    
  menu:string = "login";


  viewContainer(page :string):boolean{
      this.menu = page;
      return false;
  }

    ngOnInit() {
       this.menu = 'dashboard'; 
    }

}
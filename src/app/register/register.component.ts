import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/index';

@Component({
    selector: 'register-component',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
 
export class RegisterComponent implements OnInit {
    
    constructor(private authenticationService: AuthenticationService,
                private route: ActivatedRoute,
                private router: Router
                ) { }
  
    model: any = {};

    ngOnInit() {
       
    }
 
}
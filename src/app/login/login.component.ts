import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/index';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(private authenticationService: AuthenticationService,
                private route: ActivatedRoute,
                private router: Router
                ) { }
 
    ngOnInit() {
       
    }
 
login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password).then(
                data => {
                    if (data != null){
                        this.router.navigate(['home']);
                        console.log("succes")
                    }
                           this.loading = false;
                },
                error => {
                    console.log("errror")
                    this.loading = false;
                });

    }

   login2(){
        this.authenticationService.login(this.model.username, this.model.password).then(
          resp =>{
               console.log("a")
           },
          error =>{
                    this.loading = false;
          }
        );
     }
}
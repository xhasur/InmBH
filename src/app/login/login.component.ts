import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService , AuthenticationService } from '../services/index';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(private authenticationService: AuthenticationService,
                private route: ActivatedRoute,
                private router: Router,
                private alertService: AlertService) { }
 
    clicks: number = 0;

    ngOnInit() {
       
    }
 
login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password).then(
                data => {
                    console.log("suvcces")
                    this.router.navigate(['home']);
                },
                error => {
                      console.log("errror")
                    this.alertService.error(error);
                    this.loading = false;
                });



    }

   login2(){
        this.authenticationService.login(this.model.username, this.model.password).then(
          resp =>{
               console.log("a")
           },
          error =>{
                    this.alertService.error(error);
                    this.loading = false;
          }
        );
     }
}
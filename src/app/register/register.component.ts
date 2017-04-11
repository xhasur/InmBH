import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService , UsersService} from '../services/index';

@Component({
    selector: 'register-component',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
 
export class RegisterComponent implements OnInit {
    
    constructor(private authenticationService: AuthenticationService,
                private usersService: UsersService,
                private route: ActivatedRoute,
                private router: Router
                ) { }
  
    model: any = {};

    ngOnInit() {
       
    }
 
    save():void{
     this.usersService.saveUser(this.model.name,this.model.lastname, this.model.age,this.model.username,this.model.pass).then(
                data => {
                    console.log("succes")
                },
                error => {
                      console.log("error")
                });
 
}



}
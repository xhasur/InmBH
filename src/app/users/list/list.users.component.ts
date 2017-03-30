import {Component } from '@angular/core';
import {SlideMenuModule,MenuItem} from 'primeng/primeng';
import { UsersService } from '../../services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector :'list-users-component',
    templateUrl: 'list.users.component.html'
})
export class ListUsersComponent{
 
 cars: any[];
 cols: any[];

    constructor(private usersService: UsersService,
                private route: ActivatedRoute,
                private router: Router
                ) { }

 ngOnInit() {
            this.usersService.getUsers().then(
                data => {
                    console.log(data);
                    this.cars = data
                },
                error => { console.log("errror") });


       this.cols = [
            {field: 'name', header: 'Name'},
            {field: 'lastname', header: 'Last Name'},
            {field: 'age', header: 'Age'},
            {field: 'username', header: 'User'},
        ];
 }

        



}
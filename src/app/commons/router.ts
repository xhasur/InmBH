import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { PageNotFoundComponent } from '../pageNotFoun/page.not.found.component';


export const APPROUTER:Routes= [
    {path:'', component: AppComponent},
    {path:'home', component: HomeComponent},
    {path:'register', component: RegisterComponent},
    {path:'**', component: PageNotFoundComponent}
]
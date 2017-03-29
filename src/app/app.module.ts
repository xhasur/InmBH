import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFoun/page.not.found.component';
 
//init component
 import {InitComponent } from './init.component';


//login component
import{LoginComponent} from './login/login.component'

//register component
import{RegisterComponent} from './register/register.component'

//home component
import{HomeComponent} from './home/home.component'

//routes 
import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './commons/router';

//services
import {  AuthenticationService} from './services/index';

//material
//import { MaterialModule } from '@angular/material';
//import 'hammerjs';

//boostrap
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//ngModules

import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {SlideMenuModule,MenuItem} from 'primeng/primeng';



@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    PasswordModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APPROUTER),
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [InitComponent]
})
export class AppModule { }

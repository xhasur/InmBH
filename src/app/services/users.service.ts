import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class UsersService {
    constructor(private http: Http) { }
 
    urlBackEnd = "http://localhost:3000/";
 
 
 getUsers() {
        return this.http.get(this.urlBackEnd +'getUsers')
             .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }
 
   
 getUser(userName:string, password: string):Promise<any[]>{
        return this.http.post(this.urlBackEnd +'getUser',
            { 
               'username': userName,
               'password': password
            
            }
               )
                 .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }

 saveUser(name:string, lastname:string, age:string , username:string, password:string):Promise<any[]>{
      console.log("service")
      return this.http.post(this.urlBackEnd+'saveUsers',
                 {
                   'name': name,
                   'lastname': lastname,
                   'age': age,
                   'username': username,
                   'password': password,  
                })
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }

    private extractData(res: Response) {
        let body = res.json();
        console.log("body", body);
        if (body.status == 200){
            return body.result;
        }
        else{
            return { };
        }
    }


 private handleError(error: Response | any){
        let errMsg:string;
        if(error instanceof Response){
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else{
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
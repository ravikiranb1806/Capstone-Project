import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    url: string = '/api/v1/users';
    
    constructor(private http: Http) {}
    
    //add users
    adduser(value: any) {
        let valueString = JSON.stringify(value);
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, valueString, options).map(res => res.json());     
    }
    
}

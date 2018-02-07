import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../user/user';
import { ServiceConfig } from './service.config';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers() {    
    return this._http.get(ServiceConfig.userApi);
  }
setTestUsers() {
    this._http.post(ServiceConfig.userApi, {fullName: 'test1', email: 'test1@gmail.com'}).subscribe(
      users => { console.log("User added -> success")},
      error => { console.log("User not edded -> error -> " + error);
    });

    this._http.post(ServiceConfig.userApi, {fullName: 'test2', email: 'test2@gmail.com'}).subscribe(
      users => { console.log("User added -> success")},
      error => { console.log("User not edded -> error -> " + error);
    });

    this._http.post(ServiceConfig.userApi, {fullName: 'test3', email: 'test3@gmail.com'}).subscribe(
      users => { console.log("User added -> success")},
      error => { console.log("User not edded -> error -> " + error);
    });
   
  }


}

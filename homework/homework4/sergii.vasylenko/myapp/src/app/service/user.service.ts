import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { user } from '../model/user';
import { ServiceConfig } from './service.config';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers() {    
    return this._http.get(ServiceConfig.userApi);
  }

  addUser(user: user) {
    this._http.post(ServiceConfig.userApi, 
      {name: user.name, 
       family: user.family, 
       sex: user.sex, 
       date: user.date, 
       email: user.email 
      }
      ).subscribe(
      users => { console.log("User added -> success")},
      error => { console.log("User not edded -> error -> " + error);
    });
  }

}

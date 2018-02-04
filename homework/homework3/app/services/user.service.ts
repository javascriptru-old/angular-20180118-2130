import { User } from './../user-card/interfaces/user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  private endPoint: string = 'http://test-api.javascript.ru/v1/alxpsr/users';
  
  constructor(private _http: HttpClient) {
    
  } 
  
  public getUsers() {
    return this._http.get<Array<User>>(this.endPoint);
  }

}

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user-list/user';
import { LogService } from './log.service';

@Injectable()
export class UserService {

  // private _baseURL: string;

  constructor(private _http: HttpClient, private logService: LogService) {
    // this._baseURL = baseURL;
   }

  // , @Inject('API_BASE_URL') private baseURL: string
  // , @Inject('API_BASE_URL') baseURL: string
  public getAll() {
    this.logService.add('User profile records loaded');
    // this.logService.add(this._baseURL);
    return this._http.get('http://test-api.javascript.ru/v1/vkrasnikov/users/');
  }
}

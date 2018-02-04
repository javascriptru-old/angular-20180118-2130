import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogService } from './log.service';

@Injectable()
export class UserService {
  private _users;

  constructor(private _http: HttpClient, private _logService: LogService) {
    this._users = this._http.get('http://test-api.javascript.ru/v1/julia_dolgun/users');
  }

  public getUsers() {
    this._logService.add('Get users');
    return this._users;
  }

}

import { Injectable } from '@angular/core';
import { IUser } from './types';

@Injectable()
export class UserService {
  private _userList: IUser[] = [];

  constructor() { }

  getUserList() {
    return this._userList;
  }

  public addUserList(user: IUser) {
    this._userList.push(user);
  }

}

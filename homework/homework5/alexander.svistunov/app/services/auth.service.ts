import { Injectable } from '@angular/core';
import { UserListService } from './user-list.service';

@Injectable()
export class AuthService {

  constructor(private userList: UserListService) { }

  private _userIsTrue: boolean = false;
  public userId: number;
  public userEmail: string;
  public userName: string;

  isUserTrue(email: string, password: string) {
    this.userList.users.some((user) => {
      if(email === user.email && password === user.password) {
        this.userId = user.id;
        this.userEmail = user.email;
        this.userName = user.name;
        return this._userIsTrue = true;
      } else {
        return this._userIsTrue = false;
      }
    });

    return this._userIsTrue;
  }

  getUserTrue() {
    return this._userIsTrue;
  }

  logOut() {
    return this._userIsTrue = false;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { LogService } from './log.service';

export interface IUser {
  name: string;
  email: string;
  avatar: string;
}

@Injectable()
export class UserService {
  private _users: IUser[] = [];
  private _usersUrl: string = 'http://localhost:3000/users';

  constructor(private _http: HttpClient, private _logService: LogService) {
    this._http.get<IUser[]>(this._usersUrl)
      .do(users => this._logService.log(`Users list is loaded. Length: ${users.length}`))
      .subscribe(users => this._users.push(...users));
  }

  public  getAllUsers(): IUser[] {
    return this._users;
  }

  public deleteUser(user): IUser[] {
    this._logService.log(`Deleted user: ${user.name}`);

    return this._users.splice(this._users.indexOf(user), 1);
  }
}

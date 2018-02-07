import { Injectable } from '@angular/core';
import { UserModel } from '../_model/user.model';
import { LoggerService } from './logger.service';

@Injectable()
export class AuthService {
private _user: UserModel = null;

constructor(
    private _logger: LoggerService
) { }

get user(): UserModel {
    this._logger.log(this, 'get user');

    return this._user;
}

login(user: UserModel) {
    this._logger.log(this, 'login');

    this._user = user;
}
logout() {
    this._logger.log(this, 'logout');

    this._user = null;
}

isLogged(): boolean {
    this._logger.log(this, 'isLogged');

    return this._user !== null;
}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../_model/user.model';

@Injectable()
export class UserService {

constructor(
    private http: HttpClient,
    private _logger: LoggerService
) { }

getAll(): Observable<UserModel[]> {
    this._logger.log(this, 'getAll');

    return this.http.get('https://my-json-server.typicode.com/Burich/test-repo/users')
    .map((res) => <UserModel[]>res );
}
}

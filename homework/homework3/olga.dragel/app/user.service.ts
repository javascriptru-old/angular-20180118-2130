import { Injectable } from '@angular/core';
import {User} from './shared/models/User';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {mergeMap} from 'rxjs/operators';
import {forkJoin} from 'rxjs/observable/forkJoin';


@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  public deleteAllUsers(): Observable<string> {
    return this._http.delete('http://test-api.javascript.ru/v1/odragel/users', { responseType: 'text' });
  }

  public addAllUsers(users: User[]): Observable<Array<User>> {
    return forkJoin(users.map((user) =>
        this._http.post<User>('http://test-api.javascript.ru/v1/odragel/users', {fullName: user.fullName , email: user.email, avatarUrl: user.avatarUrl})
        ));
 }

  public getAll():  Observable<Array<User>> {
    return <Observable<User[]>>this._http.get('http://test-api.javascript.ru/v1/odragel/users');
}

}

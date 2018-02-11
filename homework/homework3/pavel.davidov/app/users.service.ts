import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { User } from './user';
import { LoggingService } from './logging.service';


const url = 'http://test-api.javascript.ru/v1/pdavydov/users/';

@Injectable()
export class UsersService {

  constructor(
    private log: LoggingService,
    private http: HttpClient) { }

  fetch(): Observable<User[]> {
    return this.http.get<User[]>(url)
      .pipe(tap(_ => this.saveLog(`GET ${url}`)));
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(url, user)
      .pipe(tap(_ => this.saveLog(`POST ${url}`)));
  }

  clear(user: User) {
    return this.http.delete(`${url}${user._id}`, { responseType: 'text' })
      .pipe(tap(_ => this.saveLog(`DELETE ${url}`)));
  }

  private saveLog(message: string) {
    this.log.add(message);
  }

}

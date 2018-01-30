import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';

//  http://test-api.javascript.ru/v1/pdavydov/MODEL/ID

const url = 'http://test-api.javascript.ru/v1/pdavydov/users/';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  fetch(): Observable<User[]> {
    return this.http.get<User[]>(url);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(url, user);
  }


}

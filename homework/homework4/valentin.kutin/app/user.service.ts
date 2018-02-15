import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) { }

  public getUsers(): Observable<any> {
    return this.httpClient.get(this.apiService.uri + 'users');
  }

  public addUser(user: User): Observable<any> {
    return this.httpClient.post(this.apiService.uri + 'users', user);
  }
}

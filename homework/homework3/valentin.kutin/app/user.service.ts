import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { LogService } from './log.service';

@Injectable()
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
    private logService: LogService
  ) { }

  public getUsers(): Observable<any> {
    this.logService.add('UserService: getUsers');
    return this.httpClient.get(this.apiService.uri + 'users');
  }
}

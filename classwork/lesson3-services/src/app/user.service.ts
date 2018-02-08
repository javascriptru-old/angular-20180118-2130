import { Injectable } from "@angular/core";
import { LogService } from './log.service';
import { HttpClient } from "@angular/common/http";

import { ReflectiveInjector } from '@angular/core';
/*
const injector = ReflectiveInjector.resolveAndCreate([UserService, LogService]);
const logService = injector.get(LogService);

const componentInejector = injector.resolveAndCreateChild([]);
*/
// !!! componentInstance.injector

@Injectable()
export class UserService {

  constructor(private _logService: LogService,
    private _http: HttpClient) {

  }

  dosomething() {
    // this._http.get('http://ya.ru').toPromise().then();
    // this._logService.log('dosomething');
  }

  getUsers() {
    return this._http.get('http://ya.ru');
  }

}

//  ----3-------5------6-------> () ---> () --> subscribe/unsubscribe => data


/*
DI
- provider
- injector
- dependency
*/

/*

Observable(keyboardEvent).switchMap(value => this.http())
.map().switchMap(id => this.http()).filter()

.subscribe()
.subscribe()
.subscribe()
*/

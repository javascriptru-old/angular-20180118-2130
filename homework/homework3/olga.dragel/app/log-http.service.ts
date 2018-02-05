import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpRequest} from '@angular/common/http/src/request';
import {HttpEvent} from '@angular/common/http/src/response';
import {HttpHandler} from '@angular/common/http/src/backend';

@Injectable()
export class LogHttp implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Http: ' + req.method + ' ' + req.url);
    return next.handle(req);
  }

}

import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http/src/backend';
import { Observable } from 'rxjs/Observable';
import { HttpEvent } from '@angular/common/http/src/response';

@Injectable()
export class LogService implements HttpInterceptor {
  private storage: any = {
    requests: []
  };

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.storage.requests.indexOf(req.url) === -1) {
      this.storage.requests.push(req.url);
    }

    console.log(this.storage);
    return next.handle(req);
  } 

}

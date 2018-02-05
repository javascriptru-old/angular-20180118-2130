import { Injectable } from "@angular/core";
import { HttpHandler, HttpRequest, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpLoggerService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(JSON.stringify(req));
    return next.handle(req);
  }

  constructor() { }

}

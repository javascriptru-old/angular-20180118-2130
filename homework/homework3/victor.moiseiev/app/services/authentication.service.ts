import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";

@Injectable()
export class AuthenticationService {

  private _isLoggedInBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor() { }


  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedInBehaviorSubject.asObservable();
  }

  login(login: string, password: string) {
    if (login === "admin" && password === "qwerty") {
      this._isLoggedInBehaviorSubject.next(true);
    }
  }

  logout(): void {
    this._isLoggedInBehaviorSubject.next(false);
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _authServise: AuthService,
    private _router: Router
  ) {}
  canActivate(): boolean {
    const isAuth = this._authServise.isAuth();

    if (isAuth === false) {
      this._router.navigate(['login']);
    }

    return isAuth;
  }
}

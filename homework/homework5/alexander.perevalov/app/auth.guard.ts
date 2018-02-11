import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
              private _router: Router) {

  }

  canActivate(): boolean {
    let isAuth: boolean = this._authService.isAuthorize();

    if (!isAuth) {
      this._router.navigate(['login']);
      return false;
    }

    return true;
  }
}

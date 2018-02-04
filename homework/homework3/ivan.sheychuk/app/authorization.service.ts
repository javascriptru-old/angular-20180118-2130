import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
  private isAuth = false;

  public switchAuth() {
    this.isAuth = !this.isAuth;
  }

  public getStatus(): boolean {
    return this.isAuth;
  }

}

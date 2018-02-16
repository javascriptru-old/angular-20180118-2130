import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private auth = false;

  constructor() {
    if (localStorage.isAuth === 'true') {
      this.auth = true;
    }
  }

  public isAuth(): boolean {
    return this.auth;
  }

  public login(user) {
    this.auth = true;
    localStorage.isAuth = true;
  }

  public logout() {
    this.auth = false;
    localStorage.removeItem('isAuth');
  }

}

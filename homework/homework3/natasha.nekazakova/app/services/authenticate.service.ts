import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticateService {
  authenticated = false;

  constructor() { }

  public isAuthenticated() {
    return this.authenticated;
  }

  public logIn() {
    if (!this.authenticated) {
      this.authenticated = true;

      return this.authenticated;
    }
  }

  public logOut() {
    if (this.authenticated) {
      this.authenticated = false;

      return this.authenticated;
    }
  }
}

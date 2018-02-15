import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor() { 
  }

  public login() {
    this.isLoggedIn = true;
  }

  public logout() {
    this.isLoggedIn = false;
  }

  public isAuthorize(): boolean {
    return this.isLoggedIn;
  }
}

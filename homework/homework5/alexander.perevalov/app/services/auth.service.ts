import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor() { 
  }

  public login() {
    this.isLoggedIn = true;
    localStorage.setItem('isLogged', 'true');
  }

  public logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLogged');
  }

  public isAuthorize(): boolean {
    return localStorage.getItem('isLogged') === 'true';
  }
}

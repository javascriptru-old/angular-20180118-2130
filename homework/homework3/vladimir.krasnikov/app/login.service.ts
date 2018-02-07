import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
public userName: string;
public isAuthenticated: boolean;

public signIn() {
  this.userName = 'Registered User';
  this.isAuthenticated = true;
}

public signOut() {
  this.userName = '';
  this.isAuthenticated = false;
}

  constructor() { }

}

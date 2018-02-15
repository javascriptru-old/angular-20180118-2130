import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  public userName = '';
  public password: string;
  public isAuthenticated = false;


  public signIn(uName: string, pwd: string): boolean {
    this.userName = uName;
    this.password = pwd;
    this.isAuthenticated = true;
    return true;
  }

  public signOut(): boolean {
    this.userName = '';
    this.password = '';
    this.isAuthenticated = false;
    return false;
 }

  constructor() { }

}

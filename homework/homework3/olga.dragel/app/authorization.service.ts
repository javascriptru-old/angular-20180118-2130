import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

  constructor() { }

  public logIn(): boolean {
    return true;
  }

  public logOut(): boolean {
    return false;
  }

}

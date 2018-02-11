import { Injectable } from '@angular/core';

@Injectable()
export class AuthoriseService {

  private _isAuthorise = false;

  constructor() { }

  get authorise() {
    return this._isAuthorise;
  }

  set authorise(flag: boolean) {
    this._isAuthorise = flag;
  }

}

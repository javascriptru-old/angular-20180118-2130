import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizeService {

  constructor() { }

  private isLogging: boolean = false;

  setLogging(isLogging: boolean){
    this.isLogging = isLogging;
  }

  getLogging() {
    return this.isLogging;
  }

}

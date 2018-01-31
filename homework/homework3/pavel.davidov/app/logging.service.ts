import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  private messages = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
    console.log(message);
  }

}

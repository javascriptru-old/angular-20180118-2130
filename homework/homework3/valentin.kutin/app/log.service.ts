import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  private log: string[] = [];

  constructor() {}

  add(message: string): void {
    this.log.push(message);
    console.log(message);
  }

  getLog() {
    return this.log.join('\n');
  }

}

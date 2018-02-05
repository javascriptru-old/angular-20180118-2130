import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  public log(message: string): void {
    console.log(message);
  }

  public warn(message: string): void {
    console.warn(message);
  }
}

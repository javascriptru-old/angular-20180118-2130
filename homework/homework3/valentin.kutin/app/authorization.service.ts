import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { LogService } from './log.service';

@Injectable()
export class AuthorizationService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private logService: LogService
  ) {}

  public logIn() {
    this.logService.add('AuthorizationService: logIn');
    this.status.next(true);
  }

  public logOut() {
    this.logService.add('AuthorizationService: logOut');
    this.status.next(false);
  }

  public getStatus(): BehaviorSubject<boolean> {
    this.logService.add('AuthorizationService: getStatus');
    return this.status;
  }
}

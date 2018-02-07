import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class AuthorizationService {
  private _isAuthorized: boolean = true;

  constructor(private _logService: LogService) {
  }

  public isAuthorized(): boolean {
    return this._isAuthorized;
  }

  public login(): void {
    if (this._isAuthorized) {
      return this._logService.warn('User already authorized');
    }

    this._isAuthorized = true;
    this._logService.log(`User authorization status has changed: Logged in`);
  }

  public logout(): void {
    this._isAuthorized = false;
    this._logService.log(`User authorization status has changed: Logged out`);
  }

}

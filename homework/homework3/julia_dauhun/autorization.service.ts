import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class AutorizationService {
  private _isAutorized: boolean = false;

  constructor(private _logService: LogService) {}

  get isAutorized() {
    this._logService.add('Get isAutorized, isAutorized = ' + this._isAutorized);
    return this._isAutorized;
  }

  set isAutorized(newValue) {
    this._logService.add('Set isAutorized, new value - ' + newValue);
    this._isAutorized = newValue;
  }
}

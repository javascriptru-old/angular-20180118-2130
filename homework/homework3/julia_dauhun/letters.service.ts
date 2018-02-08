import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogService } from './log.service';

@Injectable()
export class LettersService {
  private _letters;

  constructor(private _http: HttpClient, private _logService: LogService) {
    this._letters = this._http.get('http://test-api.javascript.ru/v1/julia_dolgun/letters');
  }

  public getLetters() {
    this._logService.add('Get letters');
    return this._letters;
  }
}

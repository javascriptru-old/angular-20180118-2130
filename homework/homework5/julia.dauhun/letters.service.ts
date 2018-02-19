import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LettersService {
  private _letters;

  constructor(private _http: HttpClient) {
    this._letters = this._http.get('http://test-api.javascript.ru/v1/julia_dolgun/letters');
  }

  public getLetters() {
    return this._letters;
  }

  public getLetter(id: string) {
    return this._http.get(`http://test-api.javascript.ru/v1/julia_dolgun/letters/${id}`);
  }
}

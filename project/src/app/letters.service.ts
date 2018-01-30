import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Letter } from './letter';

const url = 'http://test-api.javascript.ru/v1/pdavydov/letters/';

@Injectable()
export class LettersService {

  constructor(private http: HttpClient) { }

  fetch(): Observable<Letter[]> {
    return this.http.get<Letter[]>(url);
  }

  save(letter: Letter): Observable<Letter> {
    return this.http.post<Letter>(url, letter);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { Letter, Mailbox } from './letter';
import { LoggingService } from './logging.service';


const url = 'http://test-api.javascript.ru/v1/pdavydov/letters/';

@Injectable()
export class LettersService {

  constructor(
    private log: LoggingService,
    private http: HttpClient) { }

  fetch(): Observable<Letter[]> {
    return this.http.get<Letter[]>(url)
      .map(letters => letters.map((l: Letter) => { l.received = new Date; return l; }))
      .pipe(tap(_ => this.saveLog(`GET ${url}`)));
  }

  save(letter: Letter): Observable<Letter> {
    return this.http.post<Letter>(url, letter)
      .pipe(tap(_ => this.saveLog(`POST ${url}`)));
  }

  setMailbox(): Observable<Mailbox> {
    return this.http.post<Mailbox>('http://test-api.javascript.ru/v1/pdavydov/mailboxes/', new Mailbox('mail'))
      .pipe(tap(_ => this.saveLog(`POST ${url}`)));
  }

  clear(letter: Letter) {
    return this.http.delete(`${url}${letter._id}`, { responseType: 'text' })
      .pipe(tap(_ => this.saveLog(`DELETE ${url}`)));
  }

  private saveLog(message: string) {
    this.log.add(message);
  }

}

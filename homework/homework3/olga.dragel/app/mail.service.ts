import { Injectable } from '@angular/core';
import {Letter} from './shared/models/letter';
import {MailBox} from './shared/models/mailbox';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {mergeMap} from 'rxjs/operators';
import {forkJoin} from 'rxjs/observable/forkJoin';


@Injectable()
export class MailService {
//  private letters: Letter[];
//  private mailboxes: MailBox[];

  constructor(private _http: HttpClient) {}

  public getAllLetters(): Observable<Array<Letter>> {
    return <Observable<Letter[]>>this._http.get('http://test-api.javascript.ru/v1/odragel/letters');
  }

  public deleteAllLetters(): Observable<string> {
    return this._http.delete('http://test-api.javascript.ru/v1/odragel/letters', { responseType: 'text' });
  }

  public addLetters(letters: Letter[], mailBox: MailBox): Observable<Object> {
   return forkJoin(letters.map((letter) => this._http.post<Object>('http://test-api.javascript.ru/v1/odragel/letters',
      {'to': letter.to, 'body': letter.body, 'subject': letter.subject, 'mailbox': mailBox._id})));
  }

}

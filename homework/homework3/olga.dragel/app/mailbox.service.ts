import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MailBox} from './shared/models/MailBox';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class MailboxService {

  constructor(private _http: HttpClient) {}

  public getAllMailBoxes() {
    return this._http.get('http://test-api.javascript.ru/v1/odragel/mailboxes');
  }

  public deletAllMailBoxes(): Observable <string> {
     return this._http.delete('http://test-api.javascript.ru/v1/odragel/mailboxes', { responseType: 'text' });
  }

  public addMailBox(mailbox: MailBox): Observable<MailBox> {
     return this._http.post<MailBox>('http://test-api.javascript.ru/v1/odragel/mailboxes', {'title': mailbox.title});
  }

}

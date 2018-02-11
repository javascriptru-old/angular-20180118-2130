import { Mailbox } from './../mail-box/interfaces/mailbox.interface';
import { MailItem } from './../mail-box/interfaces/mail-item.inteface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  public endPoint: string = 'http://test-api.javascript.ru/v1/alxpsr/';

  constructor(
    private _http: HttpClient) {}

  public getLetters() {
    return this._http.get<Array<MailItem>>(this.endPoint + 'letters');
  }

  public getMailboxes() {
    return this._http.get<Array<Mailbox>>(this.endPoint + 'mailboxes');
  }

  public getLetterById(id: string) {
    return this._http.get<MailItem>(`${this.endPoint}letters/${id}`);
  }
}

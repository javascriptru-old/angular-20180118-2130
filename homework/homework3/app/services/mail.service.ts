import { MailItem } from './../mail-box/interfaces/mail-item.inteface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  public endPoint: string = 'http://test-api.javascript.ru/v1/alxpsr/letters';

  constructor(
    private _http: HttpClient) {}

  public getLetters() {
    return this._http.get<Array<MailItem>>(this.endPoint);
  }
}

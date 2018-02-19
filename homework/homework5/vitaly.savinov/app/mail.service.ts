import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {
  private _mailID;
  private _mailboxID;
  private _date;

  constructor(private _http: HttpClient) { }

  public getAll() {
    return this._http.get('http://test-api.javascript.ru/v1/vitsavinov/letters');
  }

}

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

  public removeMail(_id) {
    this._http.delete(`http://test-api.javascript.ru/v1/vitsavinov/letters/${_id}`, 
      { responseType: 'text' }).subscribe(
      mails => {
        console.log("success" + mails);
      },
      error => {
        console.log("error " + error);
      });
  }

  public addMail( _to, _subject, _body ) {
    this._http.post(`http://test-api.javascript.ru/v1/vitsavinov/letters`, 
                    { 'mailbox': '5a75f32a7f0d1fac2ba883e9',
                      'subject': _subject,
                      'body': _body,
                      'to': _to
                    }).subscribe(
                      mails => {
                        console.log("success" + mails);
                      },
                      error => {
                        console.log("error " + error);
                      });
  }

}

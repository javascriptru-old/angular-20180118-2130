import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { MailMessage } from './mailmessage';
import 'rxjs/add/operator/map';

@Injectable()
export class MailService {

  constructor(private _http: HttpClient) { }

  // Test Messages - Sent Mailbox
  private testLettersSent = {letters: [
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 1', body: 'Hello Mr. First!', to: 'mfirst@test.com'},
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 2', body: 'Hello Mr. Second!', to: 'msecond@test.com'},
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 3', body: 'Hello Mr. Third!', to: 'mthird@test.com'},
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 4', body: 'Hello Mr. First!', to: 'mfirst@test.com'},
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 5', body: 'Hello Mr. Second!', to: 'msecond@test.com'},
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 6', body: 'Hello Mr. Third!', to: 'mthird@test.com'}
  ]};

  // Test Messages - Inbox Mailbox (to will be used as From)
  private testLettersInbox = {letters: [
    {mailbox: '5a77bb367f0d1fac2ba885dd', subject: 'Incoming Message 1'
                , body: 'Hello Mr. Student!', to: 'mfirst@test.com'},
    {mailbox: '5a77bb367f0d1fac2ba885dd', subject: 'Incoming Message 2'
                , body: 'Hello Mr. Student! \nHow is it going?', to: 'msecond@test.com'},
    {mailbox: '5a77bb367f0d1fac2ba885dd', subject: 'Incoming Message 3'
                , body: 'Hello Mr. Student! \nDon\'t panic!', to: 'mthird@test.com'},
    {mailbox: '5a77bb367f0d1fac2ba885dd', subject: 'Incoming Message 4'
                , body: 'Hi Mr. Student! ', to: 'mfirst@test.com'},
    {mailbox: '5a77bb367f0d1fac2ba885dd', subject: 'Incoming Message 5'
                , body: 'Hi Mr. Student! \nI am writing in response to your advertisement...', to: 'msecond@test.com'},
    {mailbox: '5a77bb367f0d1fac2ba885dd', subject: 'Incoming Message 6'
              , body: 'Hello Mr. Student! \n***************', to: 'mthird@test.com'}
  ]};

  // Get All Messages From Sent Mailbox
  public getAllSent() {
     return this._http.get('http://test-api.javascript.ru/v1/vkrasnikov/letters/')
     .map((mails: Array<MailMessage>) => mails.filter(mail => mail.mailbox === '5a77bb217f0d1fac2ba885dc'));
  }

  // Get All Messages From Sent Mailbox
  public getAllInbox() {
    return this._http.get('http://test-api.javascript.ru/v1/vkrasnikov/letters/')
    .map((mails: Array<MailMessage>) => mails.filter(mail => mail.mailbox === '5a77bb367f0d1fac2ba885dd'));
 }


  // Delete Message
  public deleteMessage(id: string) {
    return this._http.delete('http://test-api.javascript.ru/v1/vkrasnikov/letters/' + id, { responseType: 'text' }).subscribe(
      () => {console.log('success'); },
      error => {console.log('error: ' + error); }
  );
  }

  public getMessage(id: string) {
    return this._http.get('http://test-api.javascript.ru/v1/vkrasnikov/letters/' + id);
  }

  // Add Test Messages to Sent Mailbox
  public addTestMessagesSent() {
    return this._http.post('http://test-api.javascript.ru/v1/vkrasnikov/', this.testLettersSent).subscribe(
      msg => {console.log(msg); },
      error => {console.log('error: ' + error); }
  );
}

 // Add Test Messages to Inbox Mailbox
 public addTestMessagesInbox() {
  return this._http.post('http://test-api.javascript.ru/v1/vkrasnikov/', this.testLettersInbox).subscribe(
    msg => {console.log(msg); },
    error => {console.log('error: ' + error); }
);
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogService } from './log.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailService {

  constructor(private _http: HttpClient, private logService: LogService) { }

  // Test Messages
  private testLetters = {letters: [
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 1', body: 'Hello Mr. First!', to: 'mfirst@test.com'},
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 2', body: 'Hello Mr. Second!', to: 'msecond@test.com'},
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 3', body: 'Hello Mr. Third!', to: 'mthird@test.com'},
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 4', body: 'Hello Mr. First!', to: 'mfirst@test.com'},
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 5', body: 'Hello Mr. Second!', to: 'msecond@test.com'},
    {mailbox: '5a77bb217f0d1fac2ba885dc', subject: 'Test Message 6', body: 'Hello Mr. Third!', to: 'mthird@test.com'}
  ]};

  // Get All Messages From Sent Mailbox
  public getAll() {
    this.logService.add('Mail records loaded');
    // this.logService.add(this._baseURL);
    return this._http.get('http://test-api.javascript.ru/v1/vkrasnikov/letters/');
  }

  // Delete Message
  public deleteMessage(id: string){
    this.logService.add('Mail record deleted');
    return this._http.delete('http://test-api.javascript.ru/v1/vkrasnikov/letters/' + id, { responseType: 'text' }).subscribe(
      () => {console.log('success'); },
      error => {console.log('error: ' + error); }
  );
  }

  // Add Test Messages to Sent Mailbox
  public addTestMessages() {
    this.logService.add('New mail records added');
    return this._http.post('http://test-api.javascript.ru/v1/vkrasnikov/', this.testLetters).subscribe(
      msg => {console.log(msg); },
      error => {console.log('error: ' + error); }
  );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StubService } from './stub.service';
import { LogService } from './log.service';

@Injectable()
export class ApiService {
  public uri = 'http://test-api.javascript.ru/v1/valentinkutin/';

  constructor(
    private httpClient: HttpClient,
    private stubService: StubService,
    private logService: LogService
  ) {}

  public clearAllData() {
    this.logService.add('API Service: clearAllData');
    return this.httpClient.delete(this.uri, { responseType: 'text' });
  }

  public postMailbox(title: string) {
    this.logService.add(`API Service: postMailBox. Title: ${title}`);
    return this.httpClient.post(this.uri + 'mailboxes', { title: title });
  }

  public postLetter(mailbox: string) {
    this.logService.add(`API Service: postLetter. Mailbox: ${mailbox}`);
    return this.httpClient.post(this.uri + 'letters', this.stubService.getLetter(mailbox, 'user@mail.com'));
  }

  public postUser() {
    this.logService.add('API Service: postUser');
    return this.httpClient.post(this.uri + 'users', this.stubService.getUser());
  }
}

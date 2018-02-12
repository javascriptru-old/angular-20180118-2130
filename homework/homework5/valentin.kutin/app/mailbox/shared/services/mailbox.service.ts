import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailboxService {

  constructor(
    private api: ApiService,
    public http: HttpClient
  ) {}

  public getMailboxes(): any {
    return this.http.get(this.api.getUri() + 'mailboxes');
  }

}

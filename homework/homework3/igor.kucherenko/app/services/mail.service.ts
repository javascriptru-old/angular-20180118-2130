import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LogService } from './log.service';

export interface IMail {
  to: string;
  from: string;
  subject: string;
  body: string;
}

@Injectable()
export class MailService {
  private _mails: IMail[] = [];
  private _mailsUrl: string = 'http://localhost:3000/mails';

  constructor(private _http: HttpClient, private _logService: LogService) {
    this._http.get<IMail[]>(this._mailsUrl)
      .do(mails => this._logService.log(`Mails list is loaded. Length: ${mails.length}`))
      .subscribe(mails => this._mails.push(...mails));
  }

  get allMails() {
    return this._mails;
  }

}

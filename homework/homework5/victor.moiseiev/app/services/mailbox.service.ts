import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { LetterService } from "./letter.service";
import "rxjs/add/operator/map";

@Injectable()
export class MailboxService {

  constructor(private readonly httpclient: HttpClient,
    private readonly letterService: LetterService) { }

  public getMailboxes(): Observable<Mailbox[]> {
    return this.httpclient.get<Mailbox[]>(`http://test-api.javascript.ru/v1/victorm/mailboxes`);
  }

  public getLetters(mailboxeId: string): Observable<Letter[]> {
    return this.letterService.getLetters().map(letters => letters.filter(x => x.mailbox === mailboxeId));
  }
}

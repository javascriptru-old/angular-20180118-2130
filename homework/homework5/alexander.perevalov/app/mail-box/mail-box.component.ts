import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Mailbox } from './interfaces/mailbox.interface';
import { MailService } from './../services/mail.service';
import { HttpClient } from '@angular/common/http';
import { MailItem } from './interfaces/mail-item.inteface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {
  private _letters: Array<MailItem>;
  public mailboxes: Array<Mailbox>;
  public filteredLetters: Array<MailItem>;

  constructor(
    private _mailService: MailService,
    private _authService: AuthService) { }

  public ngOnInit(): void {
    this._mailService.getLetters().mergeMap(letters => {
      this._letters = letters;
      return this._mailService.getMailboxes();
    }).subscribe(boxes => {
      this.mailboxes = boxes;
      this.filteredLetters = this._letters.filter(item => item.mailbox === boxes[0]._id );
    })
  }


  public login() {
    this._authService.login();
  }

  public logout() {
    this._authService.logout();
  }

  public isAuthorize(): boolean {
    return this._authService.isAuthorize();
  }

  public onChange(value) {
    this.filteredLetters = this._letters.filter(item => item.mailbox === value);
  }

}

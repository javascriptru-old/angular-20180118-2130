import { Component, OnInit } from '@angular/core';
import { MailInfo } from './mail-info';

@Component({
  selector: 'app-mail-box',
  template:
    `<app-mail *ngFor="let mail of mails"
    [mail]="mail"
    (clearMail)="clearMail($event)"></app-mail>`
})
export class MailBoxComponent implements OnInit {

  mails: MailInfo[] = [];
  constructor() { }

  ngOnInit() {
    setInterval(this.newMail.bind(this), 3000);
    setInterval(this.newMail.bind(this), 5000);
  }

  newMail() {
    this.mails = this.mails
      .concat(new MailInfo())
      .sort((a, b) => b.received.valueOf() - a.received.valueOf());
  }

  clearMail(mail: MailInfo) {
    this.mails = this.mails.filter(m => m !== mail);
  }

}

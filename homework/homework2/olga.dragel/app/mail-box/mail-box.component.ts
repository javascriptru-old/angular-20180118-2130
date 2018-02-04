import { Component, Input, OnInit } from '@angular/core';
import {Mail} from '../shared/models/Mail';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html'
})
export class MailBoxComponent implements OnInit {
  static minTimeout = 3;
  static maxTimeout = 5;
  public mails: Mail[];
  @Input() ownerMailBox: string;

  constructor() {

    this.mails = new Array<Mail>();
    const mail1: Mail = new Mail('Mary', 'letterOfMary');
    const mail2: Mail = new Mail('Tom', 'letterOfTom');

    this.mails.push(mail1);
    this.mails.push(mail2);

  }

  ngOnInit() {
    setInterval(() => this.createRandomMails(),
      1000 * this.createRandom(MailBoxComponent.minTimeout, MailBoxComponent.maxTimeout));
  }

  deleteSelectedMail(eventData) {
      this.mails.splice(this.mails.indexOf(eventData), 1);

  }

  createRandomMails() {
    const amountOfLetters: number = Math.floor((Math.random() * 2)) + 1;
    for (let i = 0; i < amountOfLetters; i++) {
      this.mails.unshift(new Mail());
    }
  }

  private createRandom(min: number, max: number): number {
    return min + Math.floor((Math.random() * ( max - min + 1)));
  }


}

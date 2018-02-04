import { Component, OnInit, OnChanges } from '@angular/core';
import { ILetter } from './types';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html'
})
export class MailboxComponent implements OnInit, OnChanges {
  public counter = 0;
  public mailList: ILetter[] = [];

  constructor() {
  }

  ngOnChanges() {

  }

  ngOnInit() {
    this.addLetterAfterEach5Seconds();
  }

  deleteLetter(letter) {
    this.mailList = this.mailList.filter(l => l !== letter);
    console.log(Date.now() - letter.date);
  }

  addLetterAfterEach5Seconds() {
    setInterval(() => {
      this.mailList.push({
        id: this.counter,
        name: `Letter ${this.counter}`,
        date: new Date()
      });

      this.counter++;
    }, 5000);
  }
}

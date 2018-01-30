import { Component, OnInit, Input } from '@angular/core';
import { Letter } from '../letter';

@Component({
  selector: 'app-mail-box',
  template:
    `<app-mail *ngFor="let letter of letters"
    [mail]="letter"
    (clearMail)="clearMail($event)"></app-mail>`
})
export class MailBoxComponent implements OnInit {

  @Input() letters: Letter[] = [];
  constructor() { }

  ngOnInit() {

  }

  newMail() {
    this.letters = this.letters
      .concat(new Letter())
      .sort((a, b) => b.received.valueOf() - a.received.valueOf());
  }

  clearMail(letter: Letter) {
    this.letters = this.letters.filter(m => m !== letter);
  }

}

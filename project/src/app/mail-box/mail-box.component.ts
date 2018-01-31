import { Component, OnInit, Input } from '@angular/core';
import { Letter } from '../letter';
import { LettersService } from '../letters.service';

@Component({
  selector: 'app-mail-box',
  template:
    `<app-mail *ngFor="let letter of letters"
    [mail]="letter"
    (clearMail)="clearMail($event)"></app-mail>`
})
export class MailBoxComponent implements OnInit {

  @Input() letters: Letter[] = [];
  constructor(
    private letterService: LettersService
  ) { }

  ngOnInit() {

  }

  newMail() {
    // this.letters = this.letters
    //   .concat(new Letter())
    //   .sort((a, b) => b.received.valueOf() - a.received.valueOf());
  }

  clearMail(letter: Letter) {
    this.letterService.clear(letter).subscribe(_ => this.letters = this.letters.filter(m => m !== letter));
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Letter } from '../Model/letter';

@Component({
  moduleId: module.id,
  selector: 'app-mail-box',
  templateUrl: 'mail-box.component.html'
})
export class MailBoxComponent implements OnInit {

  private timerId: NodeJS.Timer;

  @Input() letters: Letter[] = new Array<Letter>();
  constructor() { }

  ngOnInit() {
  }
  public startReceiving() {
    const self = this;
    this.timerId = setInterval(() => {
      const newLetter = new Letter({receivingTime: new Date()});
      newLetter.subject = 'Spam ' + newLetter.id;
      self.letters.push(newLetter);
    }, 1500);
  }

  public stopReceiving() {
    clearTimeout(this.timerId);
    this.timerId = undefined;
  }

  public deleteLetter(letterId: number) {
    const letterToDelete = this.letters.find(x => x.id === letterId);
    const index = this.letters.indexOf(letterToDelete);
    this.letters.splice(index, 1);
  }
}

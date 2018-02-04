import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { LetterModel } from '../../models/letter.model';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: []
})
export class MailComponent implements OnDestroy {

  @Input() letter: LetterModel;
  @Output() deleteEvent: EventEmitter<LetterModel> = new EventEmitter<LetterModel>();

  constructor() { }

  ngOnDestroy() {
    const endTime = new Date( Date.now() );

    console.log(`Письмо действовало с ${this.letter.receivingTime.toLocaleTimeString()} по ${endTime.toLocaleTimeString()}`);
  }

  delClicked() {
    this.deleteEvent.emit(this.letter);
  }

}

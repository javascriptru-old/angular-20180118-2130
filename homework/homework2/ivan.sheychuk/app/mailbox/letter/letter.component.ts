import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILetter } from '../types';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html'
})
export class LetterComponent implements OnInit {
  @Input() letter: ILetter;
  @Output() delete: EventEmitter<ILetter> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  emitDelete() {
    this.delete.emit(this.letter);
  }

}

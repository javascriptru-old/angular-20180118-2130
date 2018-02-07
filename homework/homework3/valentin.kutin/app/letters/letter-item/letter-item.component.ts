import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Letter } from '../../letter';

@Component({
  selector: 'app-letter-item',
  templateUrl: './letter-item.component.html',
  styleUrls: ['./letter-item.component.scss']
})
export class LetterItemComponent implements OnInit {

  @Input() public data: Letter;
  @Output() public deleteLetter: EventEmitter<string> = new EventEmitter<string>();

  private birthTime: number;

  constructor() { }

  ngOnInit() {
    this.birthTime = Date.now();
  }

  public onDeleteLetter() {
    this.deleteLetter.emit(this.data._id);
  }

}

import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  @Input()
  public index: number;

  @Input()
  public letter;

  @Output()
  public remove: EventEmitter<number> = new EventEmitter<number>();

  public removeLetter() {
    this.remove.emit(this.index);
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    let lifetime = new Date().getTime() - this.letter.initTime;
    console.log("Letters lifetime was: " + lifetime + " ms");
  }

}

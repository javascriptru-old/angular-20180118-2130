import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Letter } from '../../Model/letter';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  moduleId: module.id,
  selector: 'app-letter',
  templateUrl: 'letter.component.html',
  styleUrls: ['letter.component.css']
})
export class LetterComponent implements OnInit, OnDestroy {

  private initTime: Date;
  @Input() private letter: Letter;
  @Output() public selectToDelete: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.initTime = new Date();
  }

  ngOnDestroy(): void {
    console.log('lifetime: ' + ((new Date().getTime() - this.initTime.getTime()) / 1000) + ' second');
  }
  emitDeleting() {
    this.selectToDelete.emit(this.letter.id);
  }
}

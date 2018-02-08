import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() letter;

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log(`Компонент просуществовал ${+(new Date())- +this.letter.time} ms`);
  }

  public runDelete() {
    this.delete.emit(this.letter.id);
  }
}

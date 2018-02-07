import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mail-message',
  templateUrl: './mail-message.component.html'
})
export class MailMessageComponent implements OnInit {

  @Output() removeEvent: EventEmitter<number> = new EventEmitter<number>();

  @Input() currentIndex: number;

  public currentDate = new Date().toString();

  constructor() { }

  remove() {
    const now = new Date().toString();
    console.log(`Время жизни данного письма ${(Date.parse(now) - Date.parse(this.currentDate)) / 1000} секунд`);
    this.removeEvent.emit(this.currentIndex);
  }

  ngOnInit() {
  }

}

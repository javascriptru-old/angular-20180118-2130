import {Component, Input, Output, OnInit, EventEmitter, OnDestroy} from '@angular/core';

import { EmailMessage } from '../mail-box';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {

  @Input() data: EmailMessage;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  private birthTime: number;

  constructor() { }

  ngOnInit() {
    this.birthTime = Date.now();
  }

  ngOnDestroy() {
    console.log( this.getLifespan(Date.now() - this.birthTime) );
  }

  public parseMessageTime(milliseconds: number) {
    const date = new Date(milliseconds);

    const hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  }

  public onRemove() {
    this.remove.emit(this.data.id);
  }

  private getLifespan(milliseconds: number): any {
    return {
      days: +(milliseconds / 1000 / 60 / 60 / 24).toFixed(),
      hours: +(milliseconds / 1000 / 60 / 60).toFixed(),
      minutes: +(milliseconds / 1000 / 60).toFixed(),
      seconds: +(milliseconds / 1000).toFixed(),
      milliseconds: milliseconds
    };
  }

}

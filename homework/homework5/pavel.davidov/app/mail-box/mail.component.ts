import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { Letter } from '../letter';

@Component({
  selector: 'app-mail',
  template: `<div>
  <a [routerLink]="[mail._id]" >{{ mail.subject }}</a> <span>[{{ mail.to }}] - {{ mail.received.toLocaleTimeString() }}</span>
  <button (click)="clear()">clear</button>
  </div>`,
  styles: [
    `div { border: solid 1px #cccccc; padding: 4px 8px; margin: 2px; display: flex; background-color: #eee;}
div span {flex: 1 0 auto;}
div button { flex: 0 1 100px; }`
  ]
})
export class MailComponent implements OnDestroy {
  @Input() mail: Letter;
  @Output() clearMail: EventEmitter<Letter> = new EventEmitter<Letter>();

  constructor() {}

  clear() {
    this.clearMail.emit(this.mail);
  }

  ngOnDestroy() {
    const oms = this.convertMS(
      new Date().valueOf() - this.mail.received.valueOf()
    );
    console.log('lifetime :: ', `${oms.h} : ${oms.m} : ${oms.s}`);
  }

  convertMS(ms) {
    let d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return { d: d, h: h, m: m, s: s };
  }
}

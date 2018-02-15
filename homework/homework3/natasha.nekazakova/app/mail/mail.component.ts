import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MailModel } from '../models/mail.model';

@Component({
  selector: 'gc-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  @Input() public mail: MailModel;
  @Input() public isFirst: boolean;
  @Input() public index: number;
  @Output() deleteMail = new EventEmitter<number>();

  public formatedDate: any;

  constructor() {}

  ngOnInit() {
    //нужно было бы сделать пайпом, сработало бы пайпом?
    const date = new Date(this.mail.received ? this.mail.received : 1517768723525);

    this.formatedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
  }

  delete(index: number) {
    this.deleteMail.emit(index)
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MailMessage } from '../mailmessage';

@Component({
  selector: 'app-mail-line',
  templateUrl: './mail-line.component.html',
  styleUrls: ['./mail-line.component.css']
})
export class MailLineComponent implements OnInit {

  @Input() boundMessage: MailMessage;

  @Output() deleted: EventEmitter<number> = new EventEmitter();

  private timeCreated: number;

  constructor() { }

  ngOnInit() {
    this.timeCreated = Date.now();
  }

  ngOnDestroy() {
    console.log(Date.now() - this.timeCreated);
  }

  deleteLine() {
     this.deleted.emit(this.boundMessage.id);
  }
}

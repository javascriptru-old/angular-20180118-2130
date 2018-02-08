import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { mail } from './mail';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html'
})

export class MailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.item.startTime = new Date();
  }

  ngOnDestroy() {
    this.item.deletedTime = new Date();
    this.display();
  }

  @Output() deleteEvent: EventEmitter<mail> = new EventEmitter<mail>();

  @Input() public item: mail;

  deleteItem() {
    this.deleteEvent.emit(this.item);
  }

  private display() : void {
    console.log(this.item.deletedTime.getTime() - this.item.startTime.getTime());
  }

}

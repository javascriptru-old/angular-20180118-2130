import { MailItem } from './../interfaces/mail-item.inteface';
import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';

@Component({
  selector: 'mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.scss']
})
export class MailItemComponent implements OnInit, OnDestroy {

  @Input()  public mailItem: MailItem;
  @Output() public removeItem: EventEmitter<MailItem> = new EventEmitter<MailItem>();

  public createDate: Date;

  public destroy(item) {
    this.removeItem.emit(item);
  }

  constructor() {}

  ngOnInit() {
    this.createDate = new Date();
    this.mailItem.createdAt = this.createDate.getHours() + ':' + this.createDate.getMinutes() + ':' + this.createDate.getSeconds();
  }

  ngOnDestroy() {
    let destroyMoment = new Date();
    let lifePeriod = (destroyMoment.getTime() - this.createDate.getTime()) / 1000;

    console.log(`Компонент c id: ${this.mailItem.id} жил: ${lifePeriod} секунд`);
  }

}

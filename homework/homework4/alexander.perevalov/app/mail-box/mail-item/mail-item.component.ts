import { MailItem } from './../interfaces/mail-item.inteface';
import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';

@Component({
  selector: 'mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.scss']
})
export class MailItemComponent {
  @Input()  public letter: MailItem;

  constructor() {}

  ngOnInit() {

  }
}

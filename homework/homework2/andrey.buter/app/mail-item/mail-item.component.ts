import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.scss']
})
export class MailItemComponent implements OnInit {

  @Input() public email;
  @Output() removing: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.email.setTimeCreation();
  }

  ngOnDestroy() {
    console.log(this.email.getLivingTime())
  }

  removeEmail() {
    this.removing.emit(this.email);
  }

}

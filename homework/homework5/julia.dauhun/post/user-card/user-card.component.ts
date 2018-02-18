import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() public user;

  constructor() { }

  @Output() onChooseAccount: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  chooseAccount() {
    this.onChooseAccount.emit(this.user.email);
  }
}

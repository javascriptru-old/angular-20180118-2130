import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() public user;
  @Output() public deleteUser: EventEmitter<string> = new EventEmitter();
  @Output() public logInUser: EventEmitter<string> = new EventEmitter();
  constructor() {}
  ngOnInit() {
      console.dir(this.user);
  }
  delete() {
    this.deleteUser.emit(this.user.id);
  }
  toggleLogIn() {
      this.logInUser.emit(this.user);
  }
}

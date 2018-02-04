import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']

})
export class UsersComponent implements OnInit {
  @Output() public logInUserEvent: EventEmitter<string> = new EventEmitter();
  @Output() public deleteUserEvent: EventEmitter<string> = new EventEmitter();
  @Input() users;
  constructor() {}
  ngOnInit() {}
  deleteUser(id: string) {
      this.deleteUserEvent.emit(id);
  }
  logInUser(user) {
      this.logInUserEvent.emit(user);
  }
}

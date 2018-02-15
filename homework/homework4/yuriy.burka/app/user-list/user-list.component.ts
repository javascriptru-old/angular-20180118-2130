import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../_model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  @Input() users: UserModel[] = [];
  constructor() { }

  ngOnInit() {
  }

}

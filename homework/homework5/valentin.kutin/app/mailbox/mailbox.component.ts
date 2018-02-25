import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Mailbox } from './shared/interfaces/mailbox';
import { Letter } from './shared/interfaces/letter';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
  }

  public logOut() {
    this.userService.logOut();
  }
}

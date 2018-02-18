import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user.component';


@Component({
  selector: 'app-mailboxes',
  templateUrl: './mailboxes.component.html',
  styleUrls: ['./mailboxes.component.css']
})
export class MailboxesComponent implements OnInit {

  constructor(public userComponent: UserComponent) { }

  ngOnInit() {}

}

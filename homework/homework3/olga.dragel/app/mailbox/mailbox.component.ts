import {Component, Input, OnInit} from '@angular/core';
import {Letter} from '../shared/models/letter';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  @Input() public letters: Letter[];
  @Input() public mailBoxTitle: string;

  constructor() {
  }

  ngOnInit() {
  }


}

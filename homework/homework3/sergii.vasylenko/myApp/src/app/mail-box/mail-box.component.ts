import { Component, OnInit, Input } from '@angular/core';
import { mailBox } from './mailBox';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html'
})

export class MailBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Input() public mailBox: mailBox;

}

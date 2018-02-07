import { Component, OnInit, Input } from '@angular/core';
import { mail } from './mail';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html'
})
export class MailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public mail: mail;
}

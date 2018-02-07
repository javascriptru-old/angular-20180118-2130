import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Letter} from '../../shared/models/letter';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {


  @Input() public letter: Letter;

  constructor() { }

  ngOnInit() {
  }
}

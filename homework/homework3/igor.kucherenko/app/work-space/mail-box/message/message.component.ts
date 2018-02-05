import { Component, Input, OnInit } from '@angular/core';
import { IMail } from '../../../services/mail.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() mail: IMail;

  constructor() {
  }

  ngOnInit() {
  }

}

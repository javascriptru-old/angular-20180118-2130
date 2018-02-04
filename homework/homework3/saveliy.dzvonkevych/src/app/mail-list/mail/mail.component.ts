import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  @Input() private mail: any[];
  @Input() private id: string;
  @Output() deleteLetter: EventEmitter<string> = new EventEmitter();
  constructor() { }
  ngOnInit() {}
  delete() {
    console.log(this.id);
    this.deleteLetter.emit(this.id);
  }
}

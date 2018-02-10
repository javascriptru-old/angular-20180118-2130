import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-singlemail',
  templateUrl: './singlemail.component.html',
  styleUrls: ['./singlemail.component.css']
})

export class SinglemailComponent implements OnInit {
  @Input() mail: any;
  @Output() deleted: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleted.emit(this.mail);
  }

}

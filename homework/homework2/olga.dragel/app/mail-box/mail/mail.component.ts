import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Mail} from '../../shared/models/Mail';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit, OnDestroy {

  @Input() public mail: Mail;

  @Output() selectedMail: EventEmitter<Mail> = new EventEmitter<Mail>();

  private timeOfCreate: Date;

  constructor() { }

  ngOnInit() {
    this.timeOfCreate = new Date();
  }

  ngOnDestroy() {
    console.log('timeliving= ' + (new Date().getTime() - this.timeOfCreate.getTime()) + ' ms');
}

selectForDeleting() {
    this.selectedMail.emit(this.mail);
}

}

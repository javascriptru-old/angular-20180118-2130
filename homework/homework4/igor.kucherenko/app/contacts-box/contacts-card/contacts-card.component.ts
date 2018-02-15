import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-card',
  templateUrl: './contacts-card.component.html',
  styleUrls: ['./contacts-card.component.scss']
})
export class ContactsCardComponent {
  @Input() public contact;
}

import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-box',
  templateUrl: './contacts-box.component.html',
  styleUrls: ['./contacts-box.component.scss']
})
export class ContactsBoxComponent {
  constructor(private _contactsService: ContactsService) {
  }

  public contacts = this._contactsService.getAllContacts();
}

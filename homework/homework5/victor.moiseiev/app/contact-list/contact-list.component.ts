import { Component, OnInit } from "@angular/core";
import { ContactService } from "../services/contact.service";
import { Contact } from "../models/contact";

@Component({
  moduleId: module.id,
  selector: "app-contact-list",
  templateUrl: "contact-list.component.html",
  styleUrls: ["contact-list.component.css"]
})
export class ContactListComponent implements OnInit {

  public contacts: Contact[] = [];
  constructor(private readonly contactService: ContactService) { }

  public ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);

  }

}

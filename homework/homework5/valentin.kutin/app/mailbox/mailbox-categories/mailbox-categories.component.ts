import { Component, OnInit } from '@angular/core';

import { Mailbox } from '../shared/interfaces/mailbox';
import { MailboxService } from '../shared/services/mailbox.service';

@Component({
  selector: 'app-mailbox-categories',
  templateUrl: './mailbox-categories.component.html',
  styleUrls: ['./mailbox-categories.component.scss']
})
export class MailboxCategoriesComponent implements OnInit {

  public list: Mailbox[] = [];

  constructor(
    private mailboxService: MailboxService
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  public loadCategories(): void {
    this.mailboxService.getMailboxes().subscribe(result => {
      this.list = result;
    });
  }

}

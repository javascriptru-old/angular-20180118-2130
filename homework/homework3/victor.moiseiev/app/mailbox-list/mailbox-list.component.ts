import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MailboxService } from "../services/mailbox.service";

@Component({
  moduleId: module.id,
  selector: "app-mailbox-list",
  templateUrl: "mailbox-list.component.html",
  styleUrls: ["mailbox-list.component.css"]
})
export class MailboxListComponent implements OnInit {

  selectedMailboxId: String;
  mailboxes: Mailbox[] = [];

  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly mailboxService: MailboxService) { }

  ngOnInit() {

    this.mailboxService.getMailboxes().subscribe(mailboxes => this.mailboxes = mailboxes);

    if (this.activatedRoute.firstChild) {
      this.activatedRoute.firstChild.params
        .subscribe(params => {
          this.selectedMailboxId = params["id"];
        });
    }
  }

  onSelect(mailbox: Mailbox): void {
    this.selectedMailboxId = mailbox._id;
    this.router.navigate([mailbox._id], { relativeTo: this.activatedRoute });
  }
}

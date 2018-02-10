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

  public selectedMailboxId: string;
  public mailboxes: Mailbox[] = [];

  constructor(private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _mailboxService: MailboxService) {

  }

  public ngOnInit() {

    this._mailboxService.getMailboxes().subscribe(mailboxes => this.mailboxes = mailboxes);

    if (this._activatedRoute.firstChild) {
      this._activatedRoute.firstChild.paramMap
        .subscribe(paramMap => {
          this.selectedMailboxId = paramMap.get("mailboxId");
        });
    }
  }

  public onSelect(mailbox: Mailbox): void {
    this.selectedMailboxId = mailbox._id;
    this._router.navigate([mailbox._id], { relativeTo: this._activatedRoute });
  }
}

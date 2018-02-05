import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MailboxService } from "../../services/mailbox.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

@Component({
  moduleId: module.id,
  selector: "app-mailbox",
  templateUrl: "mailbox.component.html",
  styleUrls: ["mailbox.component.css"]
})
export class MailboxComponent implements OnInit {

  letters: Letter[] = [];

  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly mailboxService: MailboxService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params["id"])
      .switchMap(mailboxId => this.mailboxService.getLetters(mailboxId))
      .subscribe(letters => this.letters = letters);
  }
}

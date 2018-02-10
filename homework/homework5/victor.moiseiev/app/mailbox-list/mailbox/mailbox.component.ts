import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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

  public letters: Letter[] = [];

  constructor(private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _mailboxService: MailboxService) {
  }

  public ngOnInit() {
    this._activatedRoute.paramMap
      .map(paramMap => paramMap.get("mailboxId"))
      .switchMap(mailboxId => this._mailboxService.getLetters(mailboxId))
      .subscribe(letters => this.letters = letters);
  }

  public onSelect(letter: Mailbox): void {
    this._router.navigate([letter._id], { relativeTo: this._activatedRoute });
  }
}

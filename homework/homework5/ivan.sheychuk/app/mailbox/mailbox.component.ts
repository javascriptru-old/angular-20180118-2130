import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxListService } from '../box-list.service';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  public mailbox;

  constructor(
    private _route: ActivatedRoute,
    private _boxListService: BoxListService
  ) { }

  ngOnInit() {
    this._route.params.pluck('listId').subscribe((listId: number) => {
      this._boxListService.getMailbox(listId).subscribe(mailbox => {
        this.mailbox = mailbox;
        console.log(mailbox);
      });
    });
  }

}

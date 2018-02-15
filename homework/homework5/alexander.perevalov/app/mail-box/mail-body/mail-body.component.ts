import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { MailItem } from '../interfaces/mail-item.inteface';

@Component({
  selector: 'mail-body',
  templateUrl: './mail-body.component.html',
  styleUrls: ['./mail-body.component.scss']
})
export class MailBodyComponent implements OnInit {
  public letter: MailItem;

  constructor(private _mailService: MailService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.mergeMap((params: Params) => {
      return this._mailService.getLetterById(params['id']);
    }).subscribe(letter => this.letter = letter);
  }

}

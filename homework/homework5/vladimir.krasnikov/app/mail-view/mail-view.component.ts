import { Component, OnInit } from '@angular/core';

import { MailService } from '../mail.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MailMessage } from '../mailmessage';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent implements OnInit {

  public msg: MailMessage;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private mailService: MailService) { }

  ngOnInit() {
    this.getMessage();
  }

  public getMessage(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.mailService.getMessage(id)
    .subscribe(msg => this.msg = msg as MailMessage);
  }


  public goBack(): void {
    this.location.back();
  }

}

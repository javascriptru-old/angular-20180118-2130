import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Letter } from '../../letter';

@Component({
  selector: 'app-mail-detail',
  template: `
<h3>{{mail.subject}}</h3>
<i>{{mail.to}}</i>
<p>{{mail.body}}</p>
<button (click)="back()">back</button>
  `,
})
export class MailDetailComponent implements OnInit {
  mail: Letter;
  constructor(private location: Location, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.mail = data.mail;
    });
  }

  back() {
    this.location.back();
  }
}

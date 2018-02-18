import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-maillist',
  templateUrl: './maillist.component.html',
  styleUrls: ['./maillist.component.css']
})
export class MaillistComponent implements OnInit {

  constructor(public userComponent: UserComponent) {}

  ngOnInit() {}

}

import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { collectExternalReferences } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input() cardUser: User;

  public bkgColor: string;

  constructor() {
    this.bkgColor = '#FFF';
  }

  public setUser(user: User) {
    this.cardUser = user;
  }

  ngOnInit() {
  }

  changeColor() {
    // Random color
    const clrRGB: string[] = new Array('00', '33', '66', '99', 'CC', 'FF');
    this.bkgColor = '#'
    + clrRGB[Math.floor(Math.random() * 5)]
    + clrRGB[Math.floor(Math.random() * 5)]
    + clrRGB[Math.floor(Math.random() * 5)];
  }
}

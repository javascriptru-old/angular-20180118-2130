import { Component } from '@angular/core';
import {User} from './shared/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user1: User;
  public user2: User;
  public user3: User;

  constructor() {
    this.user1 = {
      name: 'Hans Down',
      profession: 'Engineer',
      avatarUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg'
    };
    this.user2 = {
      name: 'Wisteria Widget',
      profession: 'Photographer',
      avatarUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg'
    };
    this.user3 = {
      name: 'Desmond Eagle',
      profession: 'Accountant',
      avatarUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg'
    };

  }






}

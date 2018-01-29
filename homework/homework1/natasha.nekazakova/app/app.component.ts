import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usersList: UserModel[] = [
    {
      name: 'Hans Down',
      occupation: 'Engineer',
      note: 'I\'m looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?',
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
      background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
    },
    {
      name: 'Wisteria Widget',
      occupation: 'Photographer',
      note: 'Calvin: I\'m a genius, but I\'m a misunderstood genius. Hobbes: What\'s misunderstood about you? Calvin: Nobody thinks I\'m a genius.',
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg',
      background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg',
    },
    {
      name: 'Desmond Eagle',
      occupation: 'Accountant',
      note: 'If you want to stay dad you\'ve got to polish your image. I think the image we need to create for you is "repentant but learning".',
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
      background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg',
    }
  ];

  constructor() {}

  ngOnInit() {

  }
}

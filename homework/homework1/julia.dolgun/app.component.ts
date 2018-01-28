import { Component } from '@angular/core';

interface User {
  name: string;
  position: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  user1: User = {
    name: 'Hans Down',
    position: 'Engineer',
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg'
  };

  user2: User = {
    name: 'Wisteria Widget',
    position: 'Photographer',
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg'
  };

  user3: User = {
    name: 'Desmond Eagle',
    position: 'Accountant',
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg'
  };
}

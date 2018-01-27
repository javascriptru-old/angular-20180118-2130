import { Component } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public users: User[];

  constructor() {
    this.users = [
      {
        avatar: 'https://pbs.twimg.com/profile_images/597119068995387393/nwHWM7Uq_400x400.jpg',
        username: 'Nikola Tesla',
        post: 'Engineer'
      },
      {
        avatar: 'https://pbs.twimg.com/profile_images/603952010082156544/i90o1RPA_400x400.jpg',
        username: 'Albert Einstein',
        post: 'Theoretical physicist'
      },
      {
        avatar: 'http://ozlusozluk.com/yazar-resimleri/90/william-shakespeare.jpg',
        username: 'William Shakespeare',
        post: 'Poet, playwright'
      }
    ];
  }
}

import { Component } from '@angular/core';

interface IUser {
  backImage: string;
  avatar: string;
  name: string;
  profession: string;
  about: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users: IUser[] = [
    {
      backImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
      avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
      name: 'Hans Down',
      profession: 'Engineer',
      about: `I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target.
      Can you suggest something? Hello...?`
    },
    {
      backImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg',
      avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg',
      name: 'Wisteria Widget',
      profession: 'Photographer',
      about: `Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes: What's misunderstood about you?
      Calvin: Nobody thinks I'm a genius.`
    },
    {
      backImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg',
      avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
      name: 'Desmond Eagle',
      profession: 'Accountant',
      about: `If you want to stay dad you've got to polish your image. I think the image we need to create for you is "repentant but
      learning".`
    }
  ];
}

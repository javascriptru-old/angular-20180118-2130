import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  public users: any[] = [
      {
          name: "Hans Down",
          title: 'Engineer',
          excerpt: 'I\'m looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?',
          avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
          bgPicture: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
          actions: {
              follow: 'yellow',
              info: 'orange'
          }
      },
      {
          name: "Wisteria Widget",
          title: 'Photographer',
          excerpt: 'Calvin: I\'m a genius, but I\'m a misunderstood genius. Hobbes: What\'s misunderstood about you? Calvin: Nobody thinks I\'m a genius.',
          avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg',
          bgPicture: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg',
          actions: {
              follow: 'tomato',
              info: 'grey'
          }
      },
      {
          name: "Desmond Eagle",
          title: 'Accountant',
          excerpt: 'If you want to stay dad you\'ve got to polish your image. I think the image we need to create for you is "repentant but learning".',
          avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
          bgPicture: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg',
          actions: {
              follow: 'rgb(139, 195, 74)',
              info: '#E91E63'
          }
      },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

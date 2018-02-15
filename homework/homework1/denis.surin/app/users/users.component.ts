import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  
})
export class UsersComponent implements OnInit {

  public users : any[] = [{
    coverUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
    avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg",
    name: "Hans",
    surname: "Down",
    occupation: "Engineer",
    describe: "I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?"
  }, {
    coverUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg",
    avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg",
    name: "Wisteria",
    surname: "Widget",
    occupation: "Photographer",
    describe: "Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes: What's misunderstood about you? Calvin: Nobody thinks I'm a genius."
  }, {
    coverUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg",
    avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg",
    name: "Desmond",
    surname: "Eagle",
    occupation: "Accountant",
    describe: "If you want to stay dad you've got to polish your image. I think the image we need to create for you is \"repentant but learning\"."
  }];

  constructor() { }

  ngOnInit() {
  }

}

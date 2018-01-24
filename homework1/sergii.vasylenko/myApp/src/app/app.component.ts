import { Component, Input } from '@angular/core';
import { User } from './user-card/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  @Input() public user1: User = {
    avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg",
    color: "red",
    describe: "I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?",
    imageBackground: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
    name: "Jeff",
    position: "Manager"
  };

  @Input() public user2: User = {
    avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg",
    color: "green",
    describe: "Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes: What's misunderstood about you? Calvin: Nobody thinks I'm a genius.",
    imageBackground: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg",
    name: "Marta",
    position: "Photographer"
  };

  @Input() public user3: User = {
    avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg",
    color: "black",
    describe: "If you want to stay dad you've got to polish your image. I think the image we need to create for you is repentant but learning",
    imageBackground: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg",
    name: "Desmond Eagle",
    position: "Accountant"
  };

}
  
    


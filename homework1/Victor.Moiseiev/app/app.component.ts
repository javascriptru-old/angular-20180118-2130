import { Component } from '@angular/core';
import { User } from '../Model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public userList: User[];
  constructor() {
    this.userList = [];
    this.userList.push(new User('http://www.savsjobk.se/files/Tecknat_ansikte.jpg', 'Stepan', 'teacher'));
    this.userList.push(new User('https://forum.bits.media/uploads/profile/photo-thumb-46151.png', 'Kostya', 'developer'));
    this.userList.push(new User('http://www.iclucinico.it/images/BAMBINA_hnyy6gsn.jpg', 'Natasha', 'student'));
  }
}

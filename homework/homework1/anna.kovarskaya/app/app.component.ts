import { Component } from '@angular/core';
import {userType} from "./user/usertype.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public user1: userType  = {
    name: 'Ivan Petrov',
    position: 'Engineer',
    text: 'I\'m looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?'
  };

  public user2: userType  = {
    name: 'John Smith',
    position: 'Artist',
    text: 'Such are a few of the many problems relating to art which \n' +
    'present themselves to us all, and it is the purpose of this \n' +
    'book to enable us to reach such a comprehension of art.'
  };

}

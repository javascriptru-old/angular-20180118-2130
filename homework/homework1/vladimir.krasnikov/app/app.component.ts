import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'User Profiles';

  public users: User[] = [
    {id: 1, name: 'Mr. First', title: 'President', company: 'Unknown Company', imgURL: 'assets/img/blank-profile.jpg'},
    {id: 2, name: 'Mr. Second', title: 'CEO & Founder', company: 'Unknown Company', imgURL: 'assets/img/blank-profile.jpg'},
    {id: 3, name: 'Mr. Third', title: 'Vice President', company: 'Unknown Company', imgURL: 'assets/img/blank-profile.jpg'}
  ];


}

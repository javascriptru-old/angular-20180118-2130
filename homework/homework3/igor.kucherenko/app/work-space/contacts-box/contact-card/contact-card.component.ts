import { Component, Input } from '@angular/core';
import { IUser, UserService } from '../../../services/user.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  @Input() user: IUser;

  constructor(private _userService: UserService) {
  }

  public deleteItem() {
    this._userService.deleteUser(this.user);
  }

}

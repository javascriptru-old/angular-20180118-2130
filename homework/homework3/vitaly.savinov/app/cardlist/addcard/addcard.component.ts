import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CardService } from '../../card.service';
import { CardlistComponent } from '../cardlist.component';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {

  constructor(private _cardService: CardService,
              private _cardListComponent: CardlistComponent) {
              }

  ngOnInit() {
  }

  addCard(name: string, birthday: Date, photo: string, model: string) {
    // add card to the online repository via service
    this._cardService.addCard( name, birthday, photo, model );

    // add card to the local array
    this._cardListComponent.users.push({fullName: name, 
                                        avatarUrl: photo, 
                                        birthdate: birthday,
                                        address: model, 
                                        email: 'some@mail.to'});
  }
}

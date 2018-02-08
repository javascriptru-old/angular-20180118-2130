import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  public users;
  private _id: string;

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getAll().subscribe(users => this.users = users);
  }
 
  onDelete(curCard) {
    this._id = curCard._id;
    this.users.splice(this.users.indexOf(curCard), 1);
    this._cardService.removeCard( this._id ).subscribe(
                      users => {
                        console.log("success" + users);
                      },
                      error => {
                        console.log("error " + error);
                      });;
  }

}

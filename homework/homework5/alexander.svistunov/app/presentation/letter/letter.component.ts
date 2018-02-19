import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetterListService } from '../../services/letter-list.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _letterListService: LetterListService
    ) {
    this._route.params.subscribe(letter => {
      console.log(letter);
    })
  }

  private _userId = this._authService.userId;
  private _letterId = this._letterListService.getLetterId();
  private _letterBody = this._letterListService.letters[this._userId].letterList[this._letterId].body;

  ngOnInit() {
  }

}

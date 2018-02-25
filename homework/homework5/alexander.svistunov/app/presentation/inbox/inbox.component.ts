import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LetterListService } from '../../services/letter-list.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _letterListService: LetterListService
  ) { }

  private _userName = this._authService.userName;
  private _userId = this._authService.userId;

  private _letters = this._letterListService.letters;

  ngOnInit() {
  }

  readLetter(index) {
    this._letterListService.setLetterId(index);
    this._router.navigateByUrl(`mail/${index + 1}`);
  }
}

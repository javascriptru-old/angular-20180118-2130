import { Component, OnInit } from '@angular/core';
import { LetterModel } from '../_model/letter.model';
import { LetterService } from '../_service/letter.service';
import { AuthService } from '../_service/auth.service';
import { UserModel } from '../_model/user.model';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  letters: LetterModel[] = [];

  constructor(
    private letterService: LetterService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.letterService.getLettersFrom(this.authService.user)
      .subscribe((values) => {
      this.letters = values;
    } );
  }

}

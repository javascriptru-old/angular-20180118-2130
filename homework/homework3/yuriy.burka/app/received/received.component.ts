import { Component, OnInit } from '@angular/core';
import { LetterService } from '../_service/letter.service';
import { LetterModel } from '../_model/letter.model';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent implements OnInit {
  letters: LetterModel[] = [];

  constructor(
    private letterService: LetterService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.letterService.getLettersTo(this.authService.user)
      .subscribe((values) => {
      this.letters = values;
    } );
  }

}

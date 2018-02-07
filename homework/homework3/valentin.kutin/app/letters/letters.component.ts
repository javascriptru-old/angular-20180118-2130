import { Component, Input, OnInit } from '@angular/core';

import { Letter } from '../letter';
import { LetterService } from '../letter.service';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent implements OnInit {
  public data: Letter[];

  constructor(
    private letterService: LetterService
  ) { }

  ngOnInit() {
    this.letterService.getLetters().subscribe(result => this.data = result);
  }

  deleteLetter(id: string): void {
    this.letterService.deleteLetter(id).subscribe(result => {
      this.data = this.data.filter(item => {
        return item._id !== id;
      });
    });
  }

}

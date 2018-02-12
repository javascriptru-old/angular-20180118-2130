import { Component, Input, OnInit } from '@angular/core';
import { Letter } from '../shared/interfaces/letter';
import { LetterService } from '../shared/services/letter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent implements OnInit {

  public list: Letter[] = [];

  constructor(
    private letterService: LetterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(result => {
      if (result.category) {
        this.updateLetters(result.category);
      } else {
        this.updateLetters();
      }
    });
  }

  private updateLetters(category?: string): void {
    this.list = [];

    this.letterService.getLetters().subscribe(result => {
      if (category) {
        this.list = result.filter(letter => {
          return letter.mailbox === category;
        });
      } else {
        this.list = result;
      }
    });
  }

}

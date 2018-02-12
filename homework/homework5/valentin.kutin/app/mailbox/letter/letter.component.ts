import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Letter } from '../shared/interfaces/letter';
import { LetterService } from '../shared/services/letter.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  public letter: Letter;

  constructor(
    private route: ActivatedRoute,
    private letterService: LetterService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(result => {
      if (result.letter) {
        this.updateData(result.letter);
      }
    });
  }

  private updateData(letter: string): void {
    this.letterService.getLetter(letter).subscribe(result => {
      this.letter = result;
    });
  }

}

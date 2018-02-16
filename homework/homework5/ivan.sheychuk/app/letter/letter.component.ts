import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxListService } from '../box-list.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  public letter;

  constructor(
    private _route: ActivatedRoute,
    private _boxListService: BoxListService
  ) { }

  ngOnInit() {
    this._route.params.pluck('letterId').subscribe((letterId: number) => {
      this._boxListService.getLetter(letterId).subscribe(letter => {
        this.letter = letter;
        console.log(letter);
      });
    });
  }

}

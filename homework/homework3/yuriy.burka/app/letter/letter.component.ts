import { Component, OnInit, Input } from '@angular/core';
import { LetterModel } from '../_model/letter.model';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html'
})
export class LetterComponent implements OnInit {

  @Input() letter: LetterModel;

  constructor() { }

  ngOnInit() {
  }

}

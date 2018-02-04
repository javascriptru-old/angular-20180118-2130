import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  @Input() letter;
  constructor() { }

  ngOnInit() {
  }

}

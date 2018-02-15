import { Component, OnInit } from '@angular/core';
import { Letter } from '../_model/letter';
import { LettersService } from '../_service/letters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html'
})
export class MailBoxComponent implements OnInit {

  letters: Letter[] = [];

  constructor(
    private letterService: LettersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.letters = this.letterService.getLetters(id);
    });
  }

}

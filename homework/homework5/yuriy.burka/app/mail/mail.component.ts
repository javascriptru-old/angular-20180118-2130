import { Component, OnInit } from '@angular/core';
import { LettersService } from '../_service/letters.service';
import { ActivatedRoute } from '@angular/router';
import { Letter } from '../_model/letter';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html'
})
export class MailComponent implements OnInit {

  letter: Letter = null;

  constructor(
    private letterService: LettersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.letter = this.letterService.getLetter(id);
    });
  }

}

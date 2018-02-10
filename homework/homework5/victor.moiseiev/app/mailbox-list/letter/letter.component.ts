import { Component, OnInit } from "@angular/core";
import { LetterService } from "../../services/letter.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "app-letter",
  templateUrl: "letter.component.html",
  styleUrls: ["letter.component.css"]
})
export class LetterComponent implements OnInit {

  public letter: Letter;
  constructor(private readonly _activatedRoute: ActivatedRoute, private readonly _letterService: LetterService) {
  }

  public ngOnInit() {
    this._activatedRoute.paramMap
      .map(paramMap => paramMap.get("letterId"))
      .switchMap(letterId => this._letterService.getLetter(letterId))
      .subscribe(letter => this.letter = letter);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LetterClass } from '../letter';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public letter: LetterClass = new LetterClass('', '', '', '', '');

  constructor( private _router: Router ) {}

  ngOnInit() {}

  private _setLetter( _id: string,
                      _to: string,
                      _subj: string,
                      _body: string,
                      _box: string ): Observable<LetterClass> {
          this.letter._id = _id;
          this.letter.to = _to;
          this.letter.subject = _subj;
          this.letter.body = _body;
          this.letter.mailbox = _box;

          return new Observable( observer => {
                    observer.next( this.letter );
                    observer.complete();
                    });
  }

  setAttributes(id, to, subj, body, box): Observable<LetterClass> {
    return this._setLetter( id, to, subj, body, box );
  }
}

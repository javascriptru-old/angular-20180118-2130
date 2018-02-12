import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LetterService {

  constructor(
    private api: ApiService,
    private http: HttpClient
  ) { }

  public getLetters(): Observable<any> {
    return this.http.get(this.api.getUri() + 'letters');
  }

  public getLetter(letterId: string): Observable<any> {
    return this.http.get(this.api.getUri() + 'letters/' + letterId);
  }

}

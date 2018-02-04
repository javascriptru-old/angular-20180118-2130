import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { LogService } from './log.service';

@Injectable()
export class LetterService {

  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
    private logService: LogService
  ) {}

  public getLetters(): Observable<any> {
    this.logService.add('LetterService: getLetters');
    return this.httpClient.get(this.apiService.uri + 'letters');
  }

  public deleteLetter(id: string): Observable<any> {
    this.logService.add('LetterService: deleteLetter');
    return this.httpClient.delete(this.apiService.uri + 'letters/' + id, { responseType: 'text' });
  }

}

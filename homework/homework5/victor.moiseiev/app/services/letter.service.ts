import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LetterService {

  constructor(private readonly httpclient: HttpClient) { }


  public getLetters(): Observable<Letter[]> {
    return this.httpclient.get<Letter[]>(`http://test-api.javascript.ru/v1/victorm/letters`);
  }

  public getLetter(id: string): Observable<Letter> {
    return this.httpclient.get<Letter>(`http://test-api.javascript.ru/v1/victorm/letters/${id}`);
  }

}

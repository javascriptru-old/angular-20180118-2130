import { Injectable } from "@angular/core";
import { Contact } from "../models/contact";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ContactService {

  constructor(private readonly httpclient: HttpClient) { }

  public getContacts(): Observable<Contact[]> {
    return this.httpclient.get<Contact[]>(`http://test-api.javascript.ru/v1/victorm/users`);
  }
}

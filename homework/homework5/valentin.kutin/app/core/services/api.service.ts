import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  private uri = 'http://test-api.javascript.ru/v1/valentinkutin/';

  constructor() {}

  public getUri(): string {
    return this.uri;
  }
}

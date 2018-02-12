import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { LettersService } from './letters.service';

@Injectable()
export class MailResolverService implements Resolve<any> {
  constructor(private http: LettersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');

    return this.http.getOneById(id);
  }
}

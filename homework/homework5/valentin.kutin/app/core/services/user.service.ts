import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  private status = false;

  constructor(
    private router: Router
  ) {
    const user = localStorage.getItem('user');
    if (user) {
      this.status = true;
    }
  }

  public getStatus(): boolean {
    return this.status;
  }

  public logIn(): void {
    this.status = true;
    localStorage.setItem('user', 'true');
    this.router.navigate(['/mailbox']);
  }

  public logOut(): void {
    this.status = false;
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

}

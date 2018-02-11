import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<style>
nav {padding: 6px;}

nav a {
  display: inline-block;
  margin: 0 10px;
}

.router-link-active {
  font-weight: bold;
  color: orange;
}
<style>
  <nav>
    <a [routerLink]="['/']" routerLinkActive="router-link-active" [routerLinkActiveOptions]="{ exact: true }">Home</a> 
    <a [routerLink]="['/login']" routerLinkActive="router-link-active">Login</a>
    <a [routerLink]="['/mailbox']" routerLinkActive="router-link-active">MailBox</a> 
</nav>
<router-outlet></router-outlet>
  `
})
export class AppComponent {}

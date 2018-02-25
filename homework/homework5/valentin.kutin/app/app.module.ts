import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserService } from './core/services/user.service';
import { ApiService } from './core/services/api.service';

import { AuthorizationGuard } from './core/guards/authorization.guard';

import { AuthorizationModule } from './authorization/authorization.module';
import { MailboxModule } from './mailbox/mailbox.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LetterComponent } from './mailbox/letter/letter.component';
import { LettersComponent } from './mailbox/letters/letters.component';

const routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthorizationComponent },
  {
    path: 'mailbox',
    component: MailboxComponent,
    canActivate: [ AuthorizationGuard ],
    children: [
      { path: '', component: LettersComponent },
      { path: ':letter', component: LetterComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AuthorizationModule,
    MailboxModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ApiService,
    UserService,
    AuthorizationGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

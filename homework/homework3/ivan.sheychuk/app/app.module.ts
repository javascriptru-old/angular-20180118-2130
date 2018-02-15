import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './user.service';
import { MailboxService } from './mailbox.service';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { LetterComponent } from './mailbox/letter/letter.component';
import { LogInterceptor } from './log-interceptor.service';
import { AuthorizationService } from './authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    MailboxComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AuthorizationService,
    UserService,
    MailboxService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

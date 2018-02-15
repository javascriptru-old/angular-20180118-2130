import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from "./app.component";
import { UserListComponent } from "./user-list/user-list.component";
import { MailboxListComponent } from "./mailbox-list/mailbox-list.component";
import { MailboxComponent } from "./mailbox-list/mailbox/mailbox.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";


import { MailboxService } from "./services/mailbox.service";
import { UserService } from "./services/user.service";
import { LetterService } from "./services/letter.service";
import { HttpLoggerService } from "./services/http-logger.service";
import { AuthenticationService } from "./services/authentication.service";
import { LoginComponent } from "./login/login.component";
import { AuthenticationGuardService } from "./services/authentication-guard.service";



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MailboxListComponent,
    MailboxComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MailboxService,
    UserService,
    LetterService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpLoggerService, multi: true },
    AuthenticationService,
    AuthenticationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

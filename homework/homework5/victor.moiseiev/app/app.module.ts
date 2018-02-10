import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from "./app.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { MailboxListComponent } from "./mailbox-list/mailbox-list.component";
import { MailboxComponent } from "./mailbox-list/mailbox/mailbox.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";


import { MailboxService } from "./services/mailbox.service";
import { ContactService } from "./services/contact.service";
import { LetterService } from "./services/letter.service";
import { AuthenticationService } from "./services/authentication.service";
import { LoginComponent } from "./login/login.component";
import { AuthenticationGuardService } from "./services/authentication-guard.service";
import { LetterComponent } from "./mailbox-list/letter/letter.component";



@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    MailboxListComponent,
    MailboxComponent,
    LoginComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MailboxService,
    ContactService,
    LetterService,
    AuthenticationService,
    AuthenticationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

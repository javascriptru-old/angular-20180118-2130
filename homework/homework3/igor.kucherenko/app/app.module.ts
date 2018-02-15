import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthorizationService } from './services/authorization.service';
import { AuthorizationBlockComponent } from './header/authorization-block/authorization-block.component';
import { WorkSpaceComponent } from './work-space/work-space.component';
import { ContactsBoxComponent } from './work-space/contacts-box/contacts-box.component';
import { ContactCardComponent } from './work-space/contacts-box/contact-card/contact-card.component';
import { UserService } from './services/user.service';
import { MailBoxComponent } from './work-space/mail-box/mail-box.component';
import { MessageComponent } from './work-space/mail-box/message/message.component';
import { MailService } from './services/mail.service';
import { HttpClientModule } from '@angular/common/http';
import { LogService } from './services/log.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorizationBlockComponent,
    WorkSpaceComponent,
    ContactsBoxComponent,
    ContactCardComponent,
    MailBoxComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UserService, MailService, AuthorizationService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

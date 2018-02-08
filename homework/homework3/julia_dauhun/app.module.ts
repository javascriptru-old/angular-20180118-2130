import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { LettersService } from './letters.service';
import { AutorizationService } from './autorization.service';
import { LogService } from './log.service';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LetterComponent } from './mail-box/letter/letter.component';
import { UserCardComponent } from './user-card/user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    LetterComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    LettersService,
    AutorizationService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';
import { ApiService } from './api.service';
import { StubService } from './stub.service';
import { LetterService } from './letter.service';
import { AuthorizationService } from './authorization.service';
import { LogService } from './log.service';

import { AppComponent } from './app.component';
import { UserCardComponent } from './contacts/user-card/user-card.component';
import { LetterItemComponent } from './letters/letter-item/letter-item.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LettersComponent } from './letters/letters.component';
import { UserbarComponent } from './userbar/userbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    LetterItemComponent,
    ContactsComponent,
    LettersComponent,
    UserbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    ApiService,
    StubService,
    LetterService,
    AuthorizationService,
    LogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

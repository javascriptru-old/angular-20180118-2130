import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { LetterComponent } from './mailbox/letter/letter.component';


@NgModule({
  declarations: [
    AppComponent,
    MailboxComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

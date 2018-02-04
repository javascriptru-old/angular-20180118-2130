import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaillistComponent } from './maillist/maillist.component';
import { SinglemailComponent } from './maillist/singlemail/singlemail.component';


@NgModule({
  declarations: [
    AppComponent,
    MaillistComponent,
    SinglemailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

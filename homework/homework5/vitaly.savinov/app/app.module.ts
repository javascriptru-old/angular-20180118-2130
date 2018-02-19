import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BoxService } from './box.service';
import { MailService } from './mail.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { MailboxesComponent } from './user/mailboxes/mailboxes.component';
import { SingleboxComponent } from './user/mailboxes/singlebox/singlebox.component';
import { MaillistComponent } from './user/maillist/maillist.component';
import { SinglemailComponent } from './user/maillist/singlemail/singlemail.component';
import { BodyComponent } from './user/body/body.component';

const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'user', canActivate: [ AuthGuard ], component: UserComponent,
        children: [
          {path: 'boxes', component: MailboxesComponent, outlet: 'boxes'},
          {path: 'mails', component: MaillistComponent, outlet: 'letters'},
          {path: 'body', component: BodyComponent, outlet: 'letters'}
        ]
    }
  ];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    MailboxesComponent,
    SingleboxComponent,
    MaillistComponent,
    SinglemailComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( routes )
  ],
  providers: [
      AuthService,
      AuthGuard,
      BoxService,
      MailService,
      UserComponent,
      MaillistComponent,
      SinglemailComponent,
      BodyComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailComponent } from './mail-box/mail.component';
import { LettersService } from './letters.service';
import { LoggingService } from './logging.service';
import { AuthoriseService } from './authorise.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MailResolverService } from './mail-resolver.service';
import { MailDetailComponent } from './mail-box/mail-detail/mail-detail.component';

const routes = [
  { path: '', component: HomeComponent },
  {
    path: 'mailbox',
    component: MailBoxComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mailbox/:boxid',
    component: MailBoxComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mailbox/:boxid/:id',
    component: MailDetailComponent,
    resolve: { mail: MailResolverService },
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    MailComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    MailDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LettersService,
    LoggingService,
    AuthoriseService,
    AuthGuard,
    MailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

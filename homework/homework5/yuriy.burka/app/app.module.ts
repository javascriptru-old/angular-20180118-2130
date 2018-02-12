import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailComponent } from './mail/mail.component';
import { LoginComponent } from './login/login.component';
import { BoxListComponent } from './box-list/box-list.component';
import { AuthGuardService } from './_guards/auth-guard.service';
import { AuthService } from './_service/auth.service';
import { LettersService } from './_service/letters.service';

const subRoutes: Routes = [
  { path: 'box/:id', component: MailBoxComponent, canActivate: [AuthGuardService] },
  { path: 'letter/:id', component: MailComponent, canActivate: [AuthGuardService] }
];

const routes: Routes = [
  { path: '', redirectTo: 'box-list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'box-list', component: BoxListComponent, canActivate: [AuthGuardService],
  children: subRoutes }
];

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    MailComponent,
    LoginComponent,
    BoxListComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  providers: [
    AuthService,
    AuthGuardService,
    LettersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

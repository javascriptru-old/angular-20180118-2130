import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailSentComponent } from './mail-sent/mail-sent.component';
import { MailViewComponent } from './mail-view/mail-view.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'inbox', component: MailInboxComponent, canActivate: [AuthGuard] },
  { path: 'sent', component: MailSentComponent, canActivate: [AuthGuard] },
  { path: 'view/:id', component: MailViewComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/inbox', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

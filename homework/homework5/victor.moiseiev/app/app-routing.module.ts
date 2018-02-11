import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MailboxListComponent } from "./mailbox-list/mailbox-list.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { MailboxComponent } from "./mailbox-list/mailbox/mailbox.component";
import { LoginComponent } from "./login/login.component";
import { AuthenticationGuardService } from "./services/authentication-guard.service";
import { LetterComponent } from "./mailbox-list/letter/letter.component";



const appRoutes: Routes = [
  {
    path: "", redirectTo: "mailboxes", pathMatch: "full"
  },
  {
    path: "mailboxes", component: MailboxListComponent, canActivate: [AuthenticationGuardService],
    children: [{ path: ":mailboxId", component: MailboxComponent },
    { path: ":mailboxId/:letterId", component: LetterComponent }]
  },
  {
    path: "contacts", component: ContactListComponent, canActivate: [AuthenticationGuardService]
  },
  {
    path: "login", component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

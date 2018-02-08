import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MailboxListComponent } from "./mailbox-list/mailbox-list.component";
import { UserListComponent } from "./user-list/user-list.component";
import { MailboxComponent } from "./mailbox-list/mailbox/mailbox.component";
import { LoginComponent } from "./login/login.component";
import { AuthenticationGuardService } from "./services/authentication-guard.service";



const appRoutes: Routes = [
  {
    path: "", redirectTo: "mailboxes", pathMatch: "full"
  },
  {
    path: "mailboxes", component: MailboxListComponent,
    children: [{ path: ":id", component: MailboxComponent, canActivate: [AuthenticationGuardService] }]
  },
  {
    path: "users", component: UserListComponent
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

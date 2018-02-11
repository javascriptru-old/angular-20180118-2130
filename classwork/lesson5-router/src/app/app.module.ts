import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { UserResolveService } from './user-resolve.service';

const routes = [
  // { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'user/:userId',
    children: [
      // { path: 'profile', component: }
      // { path: 'settings', component: }
    ],
    data: {
      title: 'User Page'
    },
    canActivate: [AuthGuard],
    resolve: {
      user: UserResolveService
    },
    // CanDeactivate:
    component: UserComponent },
];

/**
 *  CanActivate, CanActivateChild
 *  CanDeactivate
 *  CanLoad
 *  Resolve
 */


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, UserResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

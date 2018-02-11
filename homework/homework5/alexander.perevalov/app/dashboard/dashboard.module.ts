import { UserCardComponent } from './../user-card/user-card.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@NgModule({
  declarations: [
    DashboardComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
      DashboardComponent
  ]
})
export class DashboardModule {}

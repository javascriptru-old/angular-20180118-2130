import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailboxComponent } from './mailbox.component';
import { HeaderComponent } from './header/header.component';
import { LettersComponent } from './letters/letters.component';
import { MailboxService } from './shared/services/mailbox.service';
import { MailboxCategoriesComponent } from './mailbox-categories/mailbox-categories.component';
import { RouterModule } from '@angular/router';
import { LetterService } from './shared/services/letter.service';
import { LetterComponent } from './letter/letter.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MailboxComponent,
    HeaderComponent,
    LettersComponent,
    MailboxCategoriesComponent,
    LetterComponent
  ],
  providers: [
    MailboxService,
    LetterService
  ]
})
export class MailboxModule { }

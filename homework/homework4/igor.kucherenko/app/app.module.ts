import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsBoxComponent } from './contacts-box/contacts-box.component';
import { ContactsCardComponent } from './contacts-box/contacts-card/contacts-card.component';
import { ContactsService } from './contacts.service';
import { AddFormComponent } from './contacts-box/add-form/add-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContactsBoxComponent,
    ContactsCardComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

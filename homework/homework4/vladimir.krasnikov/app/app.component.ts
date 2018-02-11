import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showAddForm: boolean;


  constructor () {

    this.showAddForm = false;

  }

  showAddUserForm() {
    this.showAddForm = true;
  }


  hideAddUserForm(eventData) {
    this.showAddForm = !eventData;
  }

}

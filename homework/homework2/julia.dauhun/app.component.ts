import { Component } from '@angular/core';

interface User {
  name: string;
  position: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

}

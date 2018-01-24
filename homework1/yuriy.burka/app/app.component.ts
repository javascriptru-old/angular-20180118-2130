import { Component } from '@angular/core';
import { UserModel } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  users: UserModel[] = [
    {name: 'Gog', description: `Nobody is quite sure how long Gog has been
    following you, or what his intentions are, but he
    seems to be collecting discarded weapons from
    your previous battles. Perhaps he could be
    compelled to fight beside you`, level: 1},
    {name: 'Wepwawet', description: 'Opener of the Ways', level: 1},
    {name: 'Tsuchi', description: `Just off the road, you spot a man furiously
    boring into the earth. As you approach, he
    silently beams a smile, hands you a shovel, and,
    before you realize what's happening, you too are
    digging holes`, level: 1}
  ];
}

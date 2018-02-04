import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from './authorization.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public authorizationStatus: boolean;

  constructor(
    private authorizationService: AuthorizationService,
    private logService: LogService
  ) {}

  ngOnInit() {
    this.authorizationService.getStatus().subscribe(result => {
      this.authorizationStatus = result;
    });

    setTimeout(_ => {
      console.log( this.logService.getLog() );
    }, 10000);
  }
}

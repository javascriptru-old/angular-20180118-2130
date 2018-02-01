import { Component, Input, OnInit } from '@angular/core';
import { User } from './user/user';
import { UserService } from './service/user-service.service';
import { mailBox } from './mail-box/mailBox';
import { MailServiceService } from './service/mail-service.service';
import { mail } from './mail-box/mail/mail';
import { AuthorizeService } from './service/authorize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  public users: Array<User> = new Array<User>();
  public mailBoxes: Array<mailBox> = new Array<mailBox>();
  public mails: Array<mail> = new Array<mail>();
  
  constructor(private _userService: UserService,
              private _mailBoxService: MailServiceService,
              private _authorizeService: AuthorizeService) 
  {
  }
ngOnInit() {  

    // Load and Get all data 

    // Added new users to db for test purposes
    //this._userService.setTestUsers();

    this._userService.getUsers().subscribe(users => {
      this.users = users as Array<User>;
      
      if (this.users.length > 5)  // show only 5 records
        this.users = this.users.splice(this.users.length - 5);
    });

   //this._mailBoxService.setTestMailBoxes();

   this._mailBoxService.getMailBoxes().subscribe(mailBoxes => {
     this.mailBoxes = mailBoxes as Array<mailBox>;
     
     if (this.mailBoxes.length > 5) // show only 5 records
        this.mailBoxes = this.mailBoxes.splice(this.mailBoxes.length - 5);
   })

   //this._mailBoxService.setTestMailBoxLetters();

   this._mailBoxService.getTestMailBoxLetters().subscribe(mails => {
    this.mails = mails as Array<mail>;
    
    if (this.mails.length > 5) // show only 5 records
       this.mails = this.mails.splice(this.mails.length - 5);
    }
  )
}

// Authorize methods
setLogging(isLogging: boolean) {
  this._authorizeService.setLogging(isLogging);
}
 
getLogging() {
  return this._authorizeService.getLogging();
}

}

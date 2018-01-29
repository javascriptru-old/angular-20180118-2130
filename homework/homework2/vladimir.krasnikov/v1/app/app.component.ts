import { Component } from '@angular/core';
import { MailMessage } from './mailmessage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Mail List';

  // Mail counter. In use for mail generation (mail id)
  private mailCount: number;

  // The maximum number of lines on the mail list on the screen
  public maxLength = 10;

  // The maximum number of lines on the mail list on the screen
  public maxCacheLength = 30;

  // Array for the screen presentation
  // The length should be less than maxLength
  public mails: MailMessage[] = [];

  // Array for the internal mail cache
  // The length should be less than maxCacheLength (to avoid high memory use)
  public mailCache: MailMessage[] = [];

  // Delete the element (message) with index i from the mailCache array
  public deleteMessage(i: number) {
    // Delete one element
    if (i > -1) {
      this.mailCache.splice(i, 1);
      // Update view (copy top elements to mails)
      this.mails = this.mailCache.slice(0, this.maxLength);
   }
  }

  // Add one new mesaage to the mailCache array (to the top)
  public addNewMessage() {
    this.mailCount++;
    const datetime =  new Date().toLocaleString();
    let message = new MailMessage();
    message = {id: this.mailCount, from: 'myFriend@test.com', subject: 'Test Message ' + this.mailCount, body: '', timeRecieved: datetime};
    this.mailCache.unshift(message);
  }

  // Add a random number of messages (from 1 to 3) to mailCache array after a random delay (0 - 2 seconds)
  // and delete mailCache array tail
  // Copy top maxLength elements to mails array
  public addMessages() {
    const timeIntervalRandom2 = Math.floor(Math.random() * 2000);
    const numOfMails = 0 + Math.floor(Math.random() * 4);
    setTimeout(() => {
      // Add messages
      for (let i = 0; i < numOfMails; i++) { this.addNewMessage(); };
      // Delete tail
      this.deleteTailMessages();
      // Update view (copy top elements to mails)
      this.mails = this.mailCache.slice(0, this.maxLength);
    }, timeIntervalRandom2);
  }

  // Delete tail messages from mailCache array
  public deleteTailMessages() {
    if (this.mailCache.length > this.maxCacheLength) {
      this.mailCache.splice(this.maxCacheLength, this.mailCache.length - this.maxCacheLength );
    }
  }

  constructor() {
    this.mailCount = 0;
    // Random interval 3 - 4 seconds
    const timeIntervalRandom = 3000 + Math.floor(Math.random() * 2000);
    setInterval(() => {
      // Add messages
      this.addMessages();
    }, timeIntervalRandom);
  }
}


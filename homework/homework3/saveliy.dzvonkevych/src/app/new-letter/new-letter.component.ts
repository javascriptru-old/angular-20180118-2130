import { Component, OnInit, Input } from '@angular/core';
import { MailsService } from '../mails.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.scss']
})
export class NewLetterComponent implements OnInit {
  @Input() currentUser;
  public formData: any = {};
  public newLetter: any = {};
  public users: any = [];
  public usersIds: any;
  constructor(private mailsService: MailsService,
              private usersService: UsersService) {

      this.usersService.getAll().subscribe(users => {
          const usersJson =  users.json();
          this.usersIds  = Object.keys(usersJson);
          this.usersIds.forEach(i => {
              usersJson[i]['id'] = i;
              this.users.push(usersJson[i]);
          });
      });
  }

  ngOnInit() {
  }
  onSubmit(event) {
      event.preventDefault();
      event.target.elements.filter = Array.prototype.filter;
      event.target.elements.forEach = Array.prototype.forEach;
      event.target.elements
          .filter(item => item.type !== 'submit')
          .forEach(item => {
              if (item.value) {
                  this.formData[item.name] = item.value;
                  item.value = '';
              } else {
                  throw new Error('All the fields required');
              }
          });
      this.newLetter = {
          sender: this.currentUser.name,
          title: this.formData.title,
          body: this.formData.body,
          received: this.mailsService.getTime()
      };
      this.mailsService.send(this.formData.receiver, this.newLetter).subscribe(responce => console.dir(responce));
  }
}

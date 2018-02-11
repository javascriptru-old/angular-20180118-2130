import { Component, OnInit, Input } from '@angular/core';
import { MailsService } from '../mails.service';

@Component({
    selector: 'app-mail-list',
    templateUrl: './mail-list.component.html',
    styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {
    @Input() currentUser;
    mails: any[] = [];
    isLetters = false;
    placeholderMessage = 'Loading...';
    mailsIds: any[];
    constructor(private mailsService: MailsService) {}

    ngOnInit() {
        this.mails = [];
        this.mailsService.getAll(this.currentUser).subscribe(user => {
            if (!user['mails']) {
                this.isLetters = false;
                this.placeholderMessage = 'You do not have any messages in your box.';
            } else {
                this.isLetters = true;
                const mailsJson =  user['mails'];
                this.mailsIds  = Object.keys(mailsJson);
                this.mailsIds.forEach(i => this.mails.push(mailsJson[i]));
            }
        });
    }
    deleteLetter(id) {
        let counter = 0;
        this.mailsIds.forEach(index => {
            if (index === id) {
                this.mailsService.remove(this.currentUser, id).subscribe(() => {
                    this.ngOnInit();
                });
            }
            counter++;
        });
    }

}

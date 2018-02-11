import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailsService } from '../mails.service';
import { UsersService } from '../users.service';

@Component({
    selector: 'app-new-letter',
    templateUrl: './new-letter.component.html',
    styleUrls: ['./new-letter.component.scss']
})
export class NewLetterComponent implements OnInit {
    @Input() currentUser;
    formGroup = new FormGroup({
        receiver: new FormControl(),
        title: new FormControl('', [Validators.required]),
        body: new FormControl('', [Validators.required]),
    });
    users: any = [];
    usersIds: any;
    constructor(private mailsService: MailsService,
                private usersService: UsersService) {

        this.usersService.getAll().subscribe(users => {
            this.usersIds  = Object.keys(users);
            this.usersIds.forEach(id => {
                users[id]['id'] = id;
                this.users.push(users[id]);
            });
        });
    }

    ngOnInit() {}
    onSubmit(event) {
        event.preventDefault();
        if (this.formGroup.valid) {
            this.mailsService
                .send(this.formGroup.value.receiver, Object.assign({
                    sender: this.currentUser,
                    received: new Date()
                }, this.formGroup.value))
                .subscribe(responce => console.dir(responce));
            this.formGroup.reset();
        } else {
            throw new Error('All the fields are required.');
        }
    }
}

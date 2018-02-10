import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    signUpGroup = new FormGroup({
        name: new FormControl('', [Validators.minLength(2)]),
        title: new FormControl('', [Validators.minLength(2)]),
        gender: new FormControl('', [Validators.required]),
        birth: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email]),
    });
    @Output() update: EventEmitter<boolean> = new EventEmitter();
    constructor(private userService: UsersService) {}

    ngOnInit() {
    }
    public onSubmit(event) {
        event.preventDefault();
        if (this.signUpGroup.valid) {
            this.userService.add(this.signUpGroup.value).subscribe(() => {
                this.update.emit(true);
            });
            this.signUpGroup.reset();
        } else {
            throw new Error('All the fields are required.');
        }
    }
}

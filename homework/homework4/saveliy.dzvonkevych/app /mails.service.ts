import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable()
export class MailsService {
    constructor(private usersService: UsersService) { }
    getAll(userId: string) {
        return this.usersService.get(userId);
    }
    // @todo make a pipe
    getTime() {
        const now = new Date();
        const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
        const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const hours   = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
        return `${hours}:${minutes}:${seconds}`;
    }
    send(receiver: string, message: any) {
        return this.usersService.addLetter(receiver, message);
    }
    remove(user: string, letterId: string) {
        return this.usersService.removeLetter(user, letterId);
    }
}
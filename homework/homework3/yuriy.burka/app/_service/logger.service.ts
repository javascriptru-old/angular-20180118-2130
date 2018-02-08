import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

constructor() { }
    log(sender: any, text: string) {
        console.log(`${sender.constructor.name}: ${text}`);
    }
}

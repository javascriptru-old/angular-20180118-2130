
export class Mailbox {
    _id?: string;
    title: string;
    constructor(title: string) {
        this.title = title;
    }
}

interface LetterInfo {
    id?: number;
    mailbox: string;
    subject: string;
    body: string;
    to: string;
    received?: Date;
}

export class Letter {
    _id?: number;
    mailbox: string;
    subject: string;
    body: string;
    to: string;
    received?: Date;

    constructor(options: LetterInfo) {
        this._id = options.id;
        this.mailbox = options.mailbox;
        this.subject = options.subject;
        this.body = options.body;
        this.to = options.to;
        this.received = new Date;
    }
}

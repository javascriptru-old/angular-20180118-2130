
export class Mailbox {
    title: string;
    constructor(title: string) {
        this.title = title;
    }
}

interface LetterInfo {
    id?: number;
    ObjectId: number;
    subject: string;
    body: string;
    to: string;
    received?: Date;
}

export class Letter {
    id?: number;
    ObjectId: number;
    subject: string;
    body: string;
    to: string;
    received?: Date;

    constructor(options: LetterInfo) {
        this.id = options.id;
        this.ObjectId = options.ObjectId;
        this.subject = options.subject;
        this.body = options.body;
        this.to = options.to;
        this.received = options.received;
    }
}

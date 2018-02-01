export class mail {
    public _id: string;
    public mailbox: string;
    public subject: string;
    public body: string;
    public to: string;

    constructor(mailbox: string, subject: string, body: string,, to: string)
    {
        this.mailbox = mailbox;
        this.subject = subject;
        this.body = body;
        this.to = to;
    }
}
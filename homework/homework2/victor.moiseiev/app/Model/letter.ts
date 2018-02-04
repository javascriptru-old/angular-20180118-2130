export class Letter {
    constructor(init?: Partial<Letter>) {
        this.id = Math.floor(Math.random() * 1000000000000);
        Object.assign(this, init);
    }
    public id;
    public subject: string;
    public body: string;
    public receivingTime: Date;
}

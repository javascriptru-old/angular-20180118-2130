export class LetterModel {
    public receivingTime: Date;

    constructor(
        public title: string,
        public body: string) {

        this.receivingTime = new Date( Date.now() );
    }
}

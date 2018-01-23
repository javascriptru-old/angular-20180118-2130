export class User {

    id: number;
    fullname: string;

    constructor(
        private fname: string,
        private lname: string,
        private mname?: string,
        private post?: string,
        private about?: string,
        private avatar?: string
    ) {
        this.fullname = `${fname} ${mname} ${lname}`;
    }
}

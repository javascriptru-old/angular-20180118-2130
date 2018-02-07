export class UserModel {
    constructor(
        public fullname: string,
        // public login: string,
        public male: boolean,
        public dateOfBirth: Date,
        public email: string
    ) { }
}

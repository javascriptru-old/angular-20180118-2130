export class User {
    _id: string;
    fullName: string;
    email: string;

    public constructor(id: string, fullName: string, email: string){
        this._id = id;
        this.fullName = fullName;
        this.email = email;
    }
}
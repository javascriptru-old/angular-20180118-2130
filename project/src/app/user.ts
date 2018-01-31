
enum Gender { M, F }

export class User {
    _id?: string;
    fullName: string;
    email: string;
    avatarUrl?: string;
    birthdate?: Date;
    gender?: Gender;
    address?: string;

    constructor(fullName: string, email: string) {
        this.fullName = fullName;
        this.email = email;
    }
}

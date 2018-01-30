
enum Gender { M, F }

export class User {
    id?: number;
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

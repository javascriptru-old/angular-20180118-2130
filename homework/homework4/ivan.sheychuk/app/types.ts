type gender = 'M' | 'W';

export interface IUser {
    firstName: string;
    lastName: string;
    gender: gender;
    birthdate: Date;
    email: string;
}

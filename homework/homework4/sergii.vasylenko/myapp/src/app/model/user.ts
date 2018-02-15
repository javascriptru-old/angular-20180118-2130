export class user {
    id: number;
    name: string;
    family: string;
    sex: string;
    email: string;
    date: Date;

    public constructor(name: string, family: string, sex: string,  email: string, date: Date){
        this.name = name;
        this.family = family;
        this.sex = sex;
        this.email = email;
        this.date = date;
    }
}

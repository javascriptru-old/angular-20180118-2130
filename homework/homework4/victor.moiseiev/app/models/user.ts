import { Sex } from "./sex.enum";

export class User {

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
  public name: string;
  public surname: string;
  public sex: Sex;
  public birthdate: Date;
  public email: string;
}

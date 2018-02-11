export interface User {
  _id?: string;
  fullName: string;
  email: string;
  avatarUrl?: string;
  gender?: string;
  birthdate?: Date | string;
  address?: string;
}

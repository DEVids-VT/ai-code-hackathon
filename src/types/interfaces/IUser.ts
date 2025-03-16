import { UserRole } from '../enums/UserRole';

export interface IUser {
  userId: string;
  name: string;
  email: string;
  picture: string;
  roles: UserRole[];
}

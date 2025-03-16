import { IUser, UserRole } from '@/types';
import { useAuth0 } from '@auth0/auth0-react';

export interface IUseUserCredentialsReturnData {
  user: IUser;
  isAuthenticated: boolean;
}

const DOMAIN = 'https://hotteach.auth0.com';

export const useUserCredentials = (): IUseUserCredentialsReturnData => {
  const { user, isAuthenticated } = useAuth0();

  return {
    user: {
      userId: user?.sub as string,
      name: user?.name as string,
      email: user?.email as string,
      picture: user?.picture as string,
      // citizenshipCountry: user?.[`${DOMAIN}/citizenship_country`] as string,
      // dateOfBirth: user?.[`${DOMAIN}/date_of_birth`] as string,
      // fullName: user?.[`${DOMAIN}/full_name`] as string,
      // phoneNumber: user?.[`${DOMAIN}/phone_number`] as string,
      roles: user?.[`${DOMAIN}/roles`] as UserRole[],
    },
    isAuthenticated,
  };
};

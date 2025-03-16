import { useUserCredentials } from '@/hooks/useUserCredentials';
import { useCallback } from 'react';
import { Outlet, To, useLocation } from 'react-router';

const logoutPath = '/logout';
const loginPath = '/login';

type ProtectedRouteProps = {
  onlyUser: boolean;
};

// The component that protects a route based on the user data
// whether he is logged or not, etc.
export default function ProtectedRoute({ onlyUser }: ProtectedRouteProps) {
  const { isAuthenticated } = useUserCredentials();
  const { pathname } = useLocation();

  // Attach redirectTo search param
  const generateNavPath = useCallback(
    (path: string) => {
      const navPath: To = {
        pathname: path,
        search: `?redirect=${pathname}`,
      };
      return navPath;
    },
    [pathname]
  );

  const passThrough = isAuthenticated === onlyUser;

  // if (onlyUser && !passThrough && pathname !== logoutPath) {
  //   return <Navigate to={generateNavPath(loginPath)} />;
  // }

  // if (!passThrough) {
  //   return <Navigate to={PageRoute.LANDING} />;
  // }

  return <Outlet />;
}

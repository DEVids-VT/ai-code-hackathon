import { useUserCredentials } from '@/hooks/useUserCredentials';
import { useAuth0 } from '@auth0/auth0-react';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Authenticate({ children }: PropsWithChildren) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const { user } = useUserCredentials();
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  // if (isAuthenticated && !user.roles?.includes(UserRole.ACTIVATED)) {
  //   navigate(PageRoute.CHECKOUT);
  //   return;
  // }

  return isAuthenticated ? <>{children}</> : null;
}

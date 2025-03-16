import { useUserCredentials } from '@/hooks/useUserCredentials';
import { PageRoute, UserRole } from '@/types';
import { Navigate, Outlet } from 'react-router';

type ProtectedRouteProps = {
  requiredRoles: UserRole[] | null;
};

// The component that protects a route based on the user data
// whether he is logged or not, etc.
export default function ProtectedRoute({ requiredRoles }: ProtectedRouteProps) {
  const { user } = useUserCredentials();

  let passThrough = requiredRoles
    ? !requiredRoles.some((role) => !user.roles.includes(role))
    : true;

  passThrough =
    passThrough ||
    ((requiredRoles === null || requiredRoles.length === 0) &&
      user.roles.length === 0);

  if (!passThrough && !user.roles.includes(UserRole.ACTIVATED)) {
    return <Navigate to={PageRoute.CHECKOUT} />;
  }

  if (!passThrough) {
    return <Navigate to={PageRoute.LANDING} />;
  }

  return <Outlet />;
}

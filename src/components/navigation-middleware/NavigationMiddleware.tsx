import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router';

export default function NavigationMiddleware({ children }: PropsWithChildren) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}

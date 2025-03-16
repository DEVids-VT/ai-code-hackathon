import FlameButton from '@/components/FlameButton';
import { useOrigin } from '@/hooks/useOrigin';
import { useAuth0 } from '@auth0/auth0-react';
import { PropsWithChildren } from 'react';

export default function LogoutButton({ children }: PropsWithChildren) {
  const { logout } = useAuth0();
  const origin = useOrigin();

  return (
    <div className="relative">
      {children}
      <div className="absolute bottom-5 right-5">
        <FlameButton
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: origin,
              },
            })
          }>
          Logout
        </FlameButton>
      </div>
    </div>
  );
}

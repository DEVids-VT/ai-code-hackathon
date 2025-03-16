import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';

export default function Logout() {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const logout2 = async () => {
      logout({ logoutParams: { returnTo: 'https://skillnet.dev' } });
    };

    logout2();
  }, []);

  return <LoadingSpinner size={80} />;
}

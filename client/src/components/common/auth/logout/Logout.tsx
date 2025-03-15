import { useAuthContext } from '@/contexts/AuthContext';
import { PageRoute } from '@/types';
import { supabase } from '@/utils/supabaseClient';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';

export default function Logout() {
  const { logoutUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Error logging out:', error.message);
        return;
      }

      logoutUser();
      navigate(PageRoute.LANDING);
    };

    logout();
  }, []);

  return <LoadingSpinner size={80} />;
}

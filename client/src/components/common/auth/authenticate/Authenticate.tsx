import { useAuthContext } from '@/contexts/AuthContext';
import { supabase } from '@/utils/supabaseClient';
import { PropsWithChildren, useEffect, useState } from 'react';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';

export default function Authenticate({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(true);
  const { setSession } = useAuthContext();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
      setLoading(false);
    };

    getSession();
  }, []);

  if (loading) {
    return <LoadingSpinner size={80} />;
  }

  return <>{children}</>;
}

import { Session, User } from '@supabase/supabase-js';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isAuthenticated: boolean;
  setSession: (v: Session | null) => void;
  logoutUser: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

// The component that provides all of the children
// with the necessary auth properties and functions
export function AuthProvider({ children }: PropsWithChildren) {
  // Persist auth in local storage
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const isAuthenticated = Boolean(session);

  useEffect(() => {
    setUser(session?.user ?? null);
  }, [session]);

  const logoutUser = useCallback(() => {
    setUser(null);
    setSession(null);
  }, [setUser, setSession]);

  return (
    <AuthContext.Provider
      value={{ user, session, isAuthenticated, setSession, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      'useAuthContext has to be used within <AuthContext.Provider>'
    );
  }

  return authContext;
};

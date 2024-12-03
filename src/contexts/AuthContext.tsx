import React, { createContext, useContext, useEffect } from 'react';
import { useAtom } from 'jotai';
import { authStateAtom, authActionsAtom } from '../stores/authStore';
import { AuthService } from '../services/auth';
import type { User } from '../types/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
  setError: (error: string | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState] = useAtom(authStateAtom);
  const [, dispatch] = useAtom(authActionsAtom);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await AuthService.getCurrentUser();
        dispatch({ type: 'SET_USER', payload: user });
      } catch (err) {
        console.error('Session check error:', err);
        dispatch({ type: 'SET_USER', payload: null });
      }
    };

    checkUser();

    const unsubscribe = AuthService.onAuthChange((user) => {
      dispatch({ type: 'SET_USER', payload: user });
    });

    return unsubscribe;
  }, [dispatch]);

  const contextValue: AuthContextType = {
    ...authState,
    login: (email: string, password: string) => 
      dispatch({ type: 'LOGIN', payload: { email, password } }),
    logout: () => dispatch({ type: 'LOGOUT' }),
    setUser: (user: User | null) => dispatch({ type: 'SET_USER', payload: user }),
    setError: (error: string | null) => dispatch({ type: 'SET_ERROR', payload: error })
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
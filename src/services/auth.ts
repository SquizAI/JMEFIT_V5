import { supabase } from '../lib/supabase';
import type { User } from '../types/auth';

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export const AuthService = {
  async signUp(email: string, password: string, displayName?: string): Promise<User> {
    try {
      const { data: { user }, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: displayName || email.split('@')[0],
            role: 'user'
          }
        }
      });

      if (error) throw new AuthError(error.message);
      if (!user) throw new AuthError('No user data returned');

      return {
        id: user.id,
        email: user.email!,
        role: 'user',
        displayName: displayName || email.split('@')[0]
      };
    } catch (err) {
      console.error('Signup error:', err);
      throw new AuthError('Failed to create account');
    }
  },

  async login(email: string, password: string): Promise<User> {
    try {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw new AuthError(error.message);
      if (!user) throw new AuthError('No user data returned');

      // Get user profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) throw new AuthError(profileError.message);

      return {
        id: user.id,
        email: user.email!,
        role: profile.role || 'user',
        displayName: profile.display_name
      };
    } catch (err) {
      console.error('Login error:', err);
      throw new AuthError('Invalid email or password');
    }
  },

  async logout(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) throw new AuthError(error.message);
  },

  async getCurrentUser(): Promise<User | null> {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) throw error;
      if (!session?.user) return null;

      // Get user profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (profileError) throw new AuthError(profileError.message);

      return {
        id: session.user.id,
        email: session.user.email!,
        role: profile.role || 'user',
        displayName: profile.display_name
      };
    } catch (err) {
      console.error('Get current user error:', err);
      return null;
    }
  },

  onAuthChange(callback: (user: User | null) => void): () => void {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          try {
            const { data: profile, error: profileError } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', session.user.id)
              .single();

            if (profileError) throw profileError;

            const user: User = {
              id: session.user.id,
              email: session.user.email!,
              role: profile.role || 'user',
              displayName: profile.display_name
            };
            callback(user);
          } catch (err) {
            console.error('Auth change error:', err);
            callback(null);
          }
        } else {
          callback(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }
};
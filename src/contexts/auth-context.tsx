'use client';

import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  favorites: string[];
  login: (email: string, pass: string) => void;
  logout: () => void;
  signup: (name: string, email: string, pass: string) => void;
  toggleFavorite: (toolId: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Mock persistence
    try {
      const storedUser = localStorage.getItem('ai-hub-user');
      const storedFavorites = localStorage.getItem('ai-hub-favorites');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
        console.log("Not on client, can't access local storage.")
    }
  }, []);

  const login = useCallback((email: string, pass: string) => {
    // This is mock logic. In a real app, you'd call an API.
    if (email === 'user@example.com' && pass === 'password123') {
      const mockUser: User = { id: '1', name: 'Demo User', email };
      setUser(mockUser);
      localStorage.setItem('ai-hub-user', JSON.stringify(mockUser));
      // Load some initial favorites for the demo user
      const initialFavorites = ['1', '3'];
      setFavorites(initialFavorites);
      localStorage.setItem('ai-hub-favorites', JSON.stringify(initialFavorites));

    } else {
      throw new Error('Invalid email or password.');
    }
  }, []);

  const signup = useCallback((name: string, email: string, pass: string) => {
    // This is mock logic.
    const newUser: User = { id: Date.now().toString(), name, email };
    setUser(newUser);
    setFavorites([]);
    localStorage.setItem('ai-hub-user', JSON.stringify(newUser));
    localStorage.setItem('ai-hub-favorites', JSON.stringify([]));
  }, []);


  const logout = useCallback(() => {
    setUser(null);
    setFavorites([]);
    localStorage.removeItem('ai-hub-user');
    localStorage.removeItem('ai-hub-favorites');
    router.push('/');
  }, [router]);

  const toggleFavorite = useCallback((toolId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId];
      localStorage.setItem('ai-hub-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const value = useMemo(
    () => ({ user, favorites, login, logout, signup, toggleFavorite }),
    [user, favorites, login, logout, signup, toggleFavorite]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

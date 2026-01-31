import { useState, useCallback } from 'react';

interface UseAuthReturn {
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export function useAuth(): UseAuthReturn {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    // Simulación de login
    try {
      // En producción, esto haría una llamada API
      setUser({
        name: 'Admin User',
        email: email,
      });
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUser(null);
  }, []);

  return {
    isLoggedIn,
    user,
    login,
    logout,
  };
}

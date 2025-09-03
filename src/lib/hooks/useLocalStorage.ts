import { useState, useEffect, useCallback } from 'react';

/**
 * Hook para gerenciar dados no localStorage
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  
  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erro ao ler localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Função para definir o valor
  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      // Permite que o valor seja uma função para ter a mesma API do useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Salva no estado
      setStoredValue(valueToStore);
      
      // Salva no localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Erro ao definir localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  // Função para remover o valor
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`Erro ao remover localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  // Sincroniza com mudanças em outras abas
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error(`Erro ao sincronizar localStorage key "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue, removeValue];
}

/**
 * Hook para gerenciar preferências do usuário
 */
export function usePreferences() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
  const [reducedMotion, setReducedMotion] = useLocalStorage('reducedMotion', false);
  const [highContrast, setHighContrast] = useLocalStorage('highContrast', false);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleReducedMotion = () => setReducedMotion(prev => !prev);
  const toggleHighContrast = () => setHighContrast(prev => !prev);

  return {
    theme,
    setTheme,
    toggleTheme,
    reducedMotion,
    setReducedMotion,
    toggleReducedMotion,
    highContrast,
    setHighContrast,
    toggleHighContrast
  };
}

/**
 * Hook para gerenciar histórico de navegação
 */
export function useNavigationHistory() {
  const [history, setHistory] = useLocalStorage<string[]>('navigationHistory', []);
  const maxHistorySize = 10;

  const addToHistory = useCallback((path: string) => {
    setHistory(prev => {
      const filtered = prev.filter(item => item !== path);
      return [path, ...filtered].slice(0, maxHistorySize);
    });
  }, [setHistory]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, [setHistory]);

  return {
    history,
    addToHistory,
    clearHistory,
    hasHistory: history.length > 0
  };
}

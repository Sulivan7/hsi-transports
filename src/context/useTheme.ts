import { useContext } from 'react';
import { ThemeContext } from './ThemeContextDef';
import type { ThemeContextType } from './ThemeContextDef';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export interface DefaultTheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export const ThemeColors: Record<'light' | 'dark', DefaultTheme> = {
  light: {
    primary: '#ffffff',
    secondary: '#f0f0f0',
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    primary: '#000000',
    secondary: '#333333',
    background: '#000000',
    text: '#ffffff',
  },
};

import { createGlobalStyle } from 'styled-components';

export const ThemeColors = {
  light: {
    primary: '#093650',
    secondary: '#28A7E9',
    background: '#FFFFFF',
    textPrimary: '#333333',
    textSecondary: '#666666',
    sectionBg: '#ebebec',
    headerBg: '#FFFFFF',
    whats: '#25D366',
  },
  dark: {
    primary: '#28A7E9',
    secondary: '#093650',
    background: '#121212',
    textPrimary: '#E0E0E0',
    textSecondary: '#A0A0A0',
    sectionBg: '#232322',
    headerBg: '#121212',
    whats: '#25D366',
  },
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    transition: color 0.3s, background-color 0.3s, border-color 0.3s;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    font-weight: 700;
    transition: background-color 0.3s, color 0.3s;
  }
`;

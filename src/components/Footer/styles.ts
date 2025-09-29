import styled from 'styled-components';
import { ThemeColors } from '../../styles/globalStyles';

export const FooterContainer = styled.footer`
  background-color: ${ThemeColors.light.primary};
  color: ${ThemeColors.light.background};
  padding: 50px 5%;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  ${({ theme }) =>
    theme.mode === 'dark' &&
    `
    background-color: ${ThemeColors.dark.primary};
    color: ${ThemeColors.dark.headerBg};
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 5%;
    gap: 30px;
  }
`;

export const FooterSection = styled.div`
  max-width: 300px;
  flex: 1;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 700;
    color: ${ThemeColors.light.secondary};

    ${({ theme }) =>
      theme.mode === 'dark' &&
      `
      color: ${ThemeColors.dark.secondary};
    `}
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 8px;
    color: ${ThemeColors.light.background};

    ${({ theme }) =>
      theme.mode === 'dark' &&
      `
      color: ${ThemeColors.dark.background};
    `}
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const SocialIconLink = styled.a`
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  margin-right: 16px;

  svg {
    color: ${ThemeColors.light.background};
    transition: color 0.3s;
  }

  &:hover {
    background-color: ${ThemeColors.light.secondary};
  }

  ${({ theme }) =>
    theme.mode === 'dark' &&
    `
    background-color: rgba(0, 0, 0, 0.2);

    svg {
      color: ${ThemeColors.dark.background};
    }

    &:hover {
      background-color: ${ThemeColors.dark.secondary};
    }
  `}
`;

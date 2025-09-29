import { Link } from 'react-router-dom';
import styled, { type DefaultTheme } from 'styled-components';
import ImageHeroLight from '../../../assets/images/ImageHero.png';
import ImageHeroDark from '../../../assets/images/ImageHero3.jpg';

export const HeroSection = styled.section`
  ${({ theme }: { theme: DefaultTheme }) => {
    const backgroundImage =
      theme.mode === 'light' ? ImageHeroLight : ImageHeroDark;
    return `
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center;
      min-height: 600px;
      display: flex;
      align-items: center;
      padding: 100px 5% 0;
      position: relative;

      width: 100%;
      max-width: 1400px;
      margin: 0 auto;

      @media (max-width: 600px) {
        background-image: none;
        min-height: 0px;
        padding: 50px 5% 0;
      }
    }
    `;
  }}
`;

export const TextContainer = styled.div`
  max-width: 600px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 2;

  h1 {
    font-size: 46px;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 24px;
    color: inherit;

    @media (max-width: 600px) {
        font-size: 38px;
    }
  }

  p {
    font-size: 18px;
    margin-bottom: 40px;
    font-weight: 300;
    color: inherit;
  }
`;

export const QuoteButton = styled(Link)`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  padding: 16px 32px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s;
  display: inline-block;

  &:hover {
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.secondary};
  }
`;

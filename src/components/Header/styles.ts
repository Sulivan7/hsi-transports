import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.background};


`;

export const LogoImage = styled.img`
  height: 50px;
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 30px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Navigation = styled.nav<{ isMenuOpen: boolean }>`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;
    gap: 28px;
  }

  li {
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.secondary};
    }

    .schedule-button {
      padding: 8px 16px;
      border-radius: 6px;
      text-decoration: none;
      transition: color 0.2s;
      color: ${({ theme }) => theme.background};
      background-color: ${({ theme }) => theme.primary};

      &:hover {
        color: ${({ theme }) => theme.background};
        background: ${({ theme }) => theme.secondary};
      }
    }

    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 24px;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.primary};
      transition: color 0.2s;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100vw;
    background: ${({ theme }) => theme.sectionBg};
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translateY(0)' : 'translateY(-120%)'};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
    pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? 'auto' : 'none')};
    transition: transform 0.3s, opacity 0.3s;
    z-index: 10;

    ul {
      flex-direction: column;
      gap: 0;
      width: 100%;
      padding: 0;
    }

    li {
      width: 100%;
      text-align: center;
      padding: 16px 0;
      border-bottom: 1px solid ${({ theme }) => theme.sectionBg};
    }
  }
`;

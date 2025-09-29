import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillMoonFill, BsFillSunFill, BsList, BsX } from 'react-icons/bs';
import { HeaderContainer, LogoImage, MenuButton, Navigation } from './styles';
import { useTheme } from '../../context/useTheme';
import LogoLight from '../../assets/images/HeaderLogo.png';
import LogoDark from '../../assets/images/HeaderLogoDark.png';

const LOGO_LIGHT = LogoLight;
const LOGO_DARK = LogoDark;

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <LogoImage
        src={theme === 'light' ? LOGO_LIGHT : LOGO_DARK}
        alt="HSI Transports Logo"
      />
      <MenuButton
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <BsX size={30} /> : <BsList size={30} />}
      </MenuButton>

      <Navigation isMenuOpen={isMenuOpen}>
        <ul onClick={handleLinkClick}>
          <li><a href="/#about">Sobre</a></li>
          <li><a href="/#advantages">Vantagens</a></li>
          <li><a href="/#fleet">Frota</a></li>
          <li>
            <Link to="/form" className="schedule-button">
              Agendar Agora
            </Link>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              title={`Mudar para o modo ${theme === 'light' ? 'escuro' : 'claro'}`}
              className="theme-toggle"
              aria-label="Alternar tema"
            >
              {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
            </button>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;

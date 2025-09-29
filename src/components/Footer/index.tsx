import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import {
  FooterContainer,
  FooterSection,
  SocialLinks,
  SocialIconLink,
} from './styles';

const ICON_SIZE = 20;

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterSection>
      <h1>HSI Transports</h1>
      <p>
        A HSI Transports oferece transporte corporativo personalizado e de alta
        qualidade há mais de 5 anos.
        <br />
        <br />
        Todos os direitos reservados © 2025
      </p>
    </FooterSection>

    <FooterSection>
      <h1>Contato</h1>
      <p>+55 (22) 98131-5390 -- WhatsApp</p>
      <p>hsitransportes.rj@gmail.com</p>
      <p>Rio das Ostras - RJ (Brazil)</p>
    </FooterSection>

    <FooterSection>
      <h1>Mídias sociais</h1>
      <SocialLinks>
        <SocialIconLink
          href="SEU_LINK_INSTAGRAM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={ICON_SIZE} />
        </SocialIconLink>
        <SocialIconLink
          href="SEU_LINK_FACEBOOK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare size={ICON_SIZE} />
        </SocialIconLink>
        <SocialIconLink
          href="https://wa.me/5522981315390"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={ICON_SIZE} />
        </SocialIconLink>
      </SocialLinks>
    </FooterSection>
  </FooterContainer>
);

export default Footer;

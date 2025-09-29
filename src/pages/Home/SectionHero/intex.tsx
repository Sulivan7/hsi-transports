import { HeroSection, TextContainer, QuoteButton } from './styles';

const SectionHero: React.FC = () => {
  return (
    <HeroSection id="hero">
      <TextContainer>
        <h1>
          Seu Transporte Executivo Corporativo nas Principais Cidades do Estado
          do RJ
        </h1>
        <p>
          Somos especialistas em Transporte Executivo Corporativo,
          <br />
          com foco em segurança e pontualidade.
        </p>
        <QuoteButton to="/form">Solicite um orçamento</QuoteButton>
      </TextContainer>
    </HeroSection>
  );
};

export default SectionHero;

import React from 'react';
import {
  AboutSection,
  ContentWrapper,
  TextContainer,
  ImageContainer,
} from './styles';
import ImageAbout from '../../../assets/images/ImageAbout.jpg';

const SectionAbout: React.FC = () => {
  return (
    <AboutSection id="about">
      <ContentWrapper>
        <TextContainer>
          <h1>
            Contamos com uma equipe de profissionais experientes, qualificados e
            discretos, priorizando sempre a segurança, pontualidade,
            privacidade, conforto e confiança dos nossos clientes.
          </h1>
          <p>
            A HSI Transports conquistou respeito no setor pela qualidade e
            seriedade dos serviços prestados.
          </p>
        </TextContainer>
        <ImageContainer>
          <img src={ImageAbout} alt="Imagem de Mulher no carro" />
        </ImageContainer>
      </ContentWrapper>
    </AboutSection>
  );
};

export default SectionAbout;

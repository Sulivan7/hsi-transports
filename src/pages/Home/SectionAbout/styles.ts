import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 90px 5%;
  background-color: ${({ theme }) => theme.background};

  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 70px 5%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;


  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 900px) {
    max-width: 100%;
    order: 2;
  }

  h1 {
    font-size: 30px;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 20px;

    @media (max-width: 600px) {
      font-size: 26px;
    }
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.textPrimary};
    margin-bottom: 25px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 900px) {
    max-width: 100%;
    order: 1;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

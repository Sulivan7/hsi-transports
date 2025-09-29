import styled from 'styled-components';

export const CarsSection = styled.section`
  padding: 70px 5%;
  background-color: ${({ theme }) => theme.background};
  text-align: center;

  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 60px 5%;
  }

  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 40px;
  }
`;

export const CarsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const CarCard = styled.div`
  background-color: ${({ theme }) => theme.sectionBg};
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: left;
  border-top: 5px solid ${({ theme }) => theme.secondary};

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 20px;
  }

  h3 {
    font-size: 14px;
    color: ${({ theme }) => theme.textSecondary};
    text-transform: uppercase;
    margin-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.textSecondary + '20'};
    padding-bottom: 5px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
  }

  li {
    font-size: 15px;
    color: ${({ theme }) => theme.textPrimary};
    margin-bottom: 5px;
    position: relative;
    padding-left: 15px;

    &::before {
      content: '•';
      color: ${({ theme }) => theme.secondary};
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }

  & > div > ul {
    margin-top: 15px;
    li {
      font-weight: bold;
      color: ${({ theme }) => theme.primary};
    }
  }
`;

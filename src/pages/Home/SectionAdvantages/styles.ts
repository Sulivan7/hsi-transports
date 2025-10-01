import styled from 'styled-components';

export const AdvantagesSection = styled.section`
  padding: 70px 5%;
  background-color: ${({ theme }) => theme.sectionBg};
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

export const AdvantagesGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const AdvantageCard = styled.li`
  background-color: ${({ theme }) => theme.background};
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  svg {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 15px;
  }

  h3 {
    font-size: 20px;
    color: ${({ theme }) => theme.textPrimary};
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 0;
  }
`;

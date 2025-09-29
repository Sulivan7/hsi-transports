import styled from 'styled-components';
import { ThemeColors } from '../../styles/globalStyles';

export const ButtonLink = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${ThemeColors.light.whats};
  color: ${ThemeColors.light.background};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  svg {
    color: ${ThemeColors.light.background};
    width: 32px;
    height: 32px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

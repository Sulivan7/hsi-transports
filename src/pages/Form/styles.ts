// src/pages/Form/styles.ts

import styled, { css, type DefaultTheme } from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  max-width: 900px;
  margin: 100px auto 50px;
  padding: 40px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 600px) {
    margin: 80px 10px 30px;
    padding: 30px 15px;
  }
`;

export const HomeButton = styled(Link)`
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.secondary};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  }

  @media (max-width: 600px) {
    top: 15px;
    left: 15px;
    padding: 6px 10px;
    font-size: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  margin-bottom: 10px;
  margin-top: 60px;

  @media (max-width: 600px) {
    font-size: 26px;
    margin-top: 30px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
  margin-bottom: 30px;
`;

export const Fieldset = styled.fieldset`
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.sectionBg};
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 30px;

  h2 {
    font-size: 20px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
    margin-bottom: 20px;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  > div {
    display: flex;
    flex-direction: column;
    min-width: 250px;
    flex: 1;

    @media (max-width: 768px) {
      min-width: unset;
      flex: 100%;
    }
  }
`;

export const InlineFields = styled(FieldGroup)`
  gap: 15px;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  > div {
    flex: 1;
    width: auto;

    @media (max-width: 600px) {
      width: 100% !important;
    }

    &.triple-field {
      width: 31%;
      flex: 0 0 calc(33.333% - 10px);

      @media (max-width: 600px) {
        width: 100% !important;
        flex: 100%;
      }
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textPrimary};
  margin-bottom: 5px;
  font-weight: 500;
`;

const FormFieldBase = css`
  padding: 10px;
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary + '30'};
  border-radius: 4px;
  font-size: 16px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textPrimary};
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: ${({ theme }: { theme: DefaultTheme }) => theme.secondary};
    box-shadow: 0 0 0 3px ${({ theme }: { theme: DefaultTheme }) => theme.secondary + '30'};
    outline: none;
  }
`;

export const Input = styled.input`
  ${FormFieldBase}
  height: 40px;
`;

export const Select = styled.select`
  ${FormFieldBase}
  height: 40px;
`;

export const TextArea = styled.textarea`
  ${FormFieldBase}
  resize: vertical;
  min-height: 100px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    cursor: pointer;
    accent-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  }

  ${Label} {
    margin: 0;
    cursor: pointer;
    font-weight: normal;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  padding: 15px 30px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 200px;
  display: block;
  margin: 40px auto 0;

  &:hover {
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.whats};
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 12px 20px;
    font-size: 14px;
  }
`;

export const MaskedInput = styled.input`
  ${FormFieldBase}
  height: 40px;
`;

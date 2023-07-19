import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  width: ${({ theme }) => theme.spacing(60)};
  height: ${({ theme }) => theme.spacing(12.5)};
  background: ${({ theme }) => theme.colors.btnGradient};
  border-radius: ${({ theme }) => theme.radii.button};
  box-shadow: ${({ theme }) => theme.shadows.secondary};

  color: ${({ theme }) => theme.colors.primaryFont};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  /* Вариант "primary" */
  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background: ${({ theme }) => theme.colors.btnGradient};
    `}

  /* Вариант "secondary" */
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: ${({ theme }) => theme.colors.btnVioletText};
      background: ${({ theme }) => theme.colors.btnWhiteBg};
      border: ${({ theme }) => theme.borders.normal};
      border-color: ${({ theme }) => theme.colors.blue};
    `}
 /* Вариант "third" */
      ${({ variant }) =>
    variant === 'third' &&
    css`
      width: ${({ theme }) => theme.spacing(17.5)};
      height: ${({ theme }) => theme.spacing(7.5)};
    `}
`;

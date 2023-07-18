import { ButtonStyled } from 'components/Button/Button.styled';
import { Form } from 'formik';
import styled from 'styled-components';

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 533px;
  height: 570px;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  background-color: ${({ theme }) => theme.colors.modalBackground};
`;

export const FormStyled = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const WrapperButton = styled(FormStyled)`
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const ButtonWhiteStyled = styled(ButtonStyled)`
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.btnVioletText};
  background: ${({ theme }) => theme.colors.btnWhiteBg};
`;

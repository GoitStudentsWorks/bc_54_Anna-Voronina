import { Field, Form } from 'formik';
import styled from 'styled-components';

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
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
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const WrapperField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FieldStyled = styled(Field)`
  margin-top: 35px;
  width: ${({ theme }) => theme.spacing(102)};
  height: ${({ theme }) => theme.spacing(9)};
  outline: none;
  border: none;
  border-bottom: 2px solid grey;
  background-color: rgba(255, 255, 255, 0);
  color: grey;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid grey;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;

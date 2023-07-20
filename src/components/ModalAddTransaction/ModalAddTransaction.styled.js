import { Field, Form } from 'formik';
import styled from 'styled-components';

export const ModalAddWrapper = styled.div`
  text-align: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

export const StyledField = styled(Field)`
  height: ${({ theme }) => theme.spacing(10)};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid currentColor;
  color: ${({ theme }) => theme.colors.secondaryFont};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  margin-bottom: 40px;
  font-weight: ${({ weight }) => weight};
  &::placeholder {
    color: currentColor;
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(0.6);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

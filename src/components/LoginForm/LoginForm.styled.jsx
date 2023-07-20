import { Field, Form } from 'formik';
import { IoMdMail, IoMdLock } from 'react-icons/io';
import styled from 'styled-components';

export const WrapperForm = styled.div`
  padding: 80px 62px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 533px;

  margin: 0 auto;
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  background-color: rgba(47, 21, 176, 0.73);
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
  margin-top: 40px;
  padding-left: 40px;
  width: ${({ theme }) => theme.spacing(102)};
  height: ${({ theme }) => theme.spacing(9)};
  outline: none;
  border: none;
  border-bottom: 2px solid grey;
  background-color: rgba(255, 255, 255, 0);
  color: grey;
  position: relative;
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

export const EmailIcon = styled(IoMdMail)`
  height: 24px;

  color: grey;
  position: absolute;
  left: 8px;
  top: 74%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
`;

export const WrapperIcon = styled.div`
  position: relative;
`;
export const WrapperIcon2 = styled.div`
  position: relative;
`;
export const PasswordlIcon = styled(IoMdLock)`
  height: 24px;
  width: 24px;
  color: grey;
  position: absolute;
  left: 8px;
  top: 74%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
`;
export const WrapperIcon3 = styled.div`
  position: relative;
`;

export const PasswordlIconLook = styled.div`
  height: 24px;
  width: 24px;
  color: grey;
  position: absolute;
  right: 0;
  top: 63%;
`;

import { Field, Form } from 'formik';
import { BsPlusLg } from 'react-icons/bs';
import { HiOutlineMinus } from 'react-icons/hi';
import styled from 'styled-components';

export const ModalAddWrapper = styled.div`
  text-align: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;
export const ModalTransactionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const RadioWrapperChoose = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const RadioWrapper = styled.span`
  width: ${({ theme }) => theme.spacing(20)};
  height: ${({ theme }) => theme.spacing(10)};
  border-radius: ${({ theme }) => theme.spacing(7.5)};
  background-color: white;
  display: flex;
  position: relative;
`;
export const StyledInp = styled.input`
  display: none;
`;

export const StyledLabelWrapper = styled.label`
  display: inline-block;
  width: 50%;
  height: 100%;

  position: absolute;
  display: 'flex';
  /* left: -100%; */
  &:hover {
    cursor: pointer;
  }
`;
export const IncomeSpan = styled.span`
  color: ${({ isSelected }) =>
    isSelected === true ? '#ffb627' : 'rgb(251, 251, 251)'};
`;

export const IncomeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(11)};
  height: ${({ theme }) => theme.spacing(11)};
  border-radius: 50%;
  background-color: #ffb627;
  box-shadow: 0px 0px 7px 5px rgba(255, 182, 39, 0.33);

  position: absolute;
  left: -3%;
  top: 50%;
  transform: translateY(-50%);
`;

export const PlusButton = styled(BsPlusLg)`
  width: ${({ theme }) => theme.spacing(7)};
  height: ${({ theme }) => theme.spacing(7)};
`;
export const ExpenseSpan = styled.span`
  color: ${({ isSelected }) =>
    isSelected === true ? '#ff868d' : 'rgb(251, 251, 251)'};
`;

export const ExpenseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(11)};
  height: ${({ theme }) => theme.spacing(11)};
  border-radius: 50%;
  background-color: #ff868d;
  box-shadow: 0px 0px 7px 5px rgba(255, 134, 141, 0.33);

  position: absolute;
  right: -3%;
  top: 50%;
  transform: translateY(-50%);
`;

export const MinusButton = styled(HiOutlineMinus)`
  width: ${({ theme }) => theme.spacing(7)};
  height: ${({ theme }) => theme.spacing(7)};
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

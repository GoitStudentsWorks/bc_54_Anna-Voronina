import { Link } from 'react-router-dom';
import { WrapperForm } from 'components/LoginForm/LoginForm.styled';
import styled, { css, keyframes } from 'styled-components';
import { BiSolidUserRectangle } from 'react-icons/bi';

export const WrapperFormReg = styled(WrapperForm)`
  padding: 60px 62px;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme }) => theme.spacing(75)};
  min-height: ${({ theme }) => theme.spacing(12.5)};

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.btnVioletText};
  background: ${({ theme }) => theme.colors.btnWhiteBg};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.radii.button};
  box-shadow: ${({ theme }) => theme.shadows.secondary};
  cursor: pointer;
`;

export const NameRegisterIcon = styled(BiSolidUserRectangle)`
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

const passwordStrengthAnimation = keyframes`
  from {
    width: 0%;
    background-color: transparent;
  }
  to {
    width:${props => props.width};
    background-color: ${props => props.color};
  }
`;

export const PasswordStrengthIndicator = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 5px;
  background-color: transparent;
  border-radius: 5px;
  animation: ${passwordStrengthAnimation} 0.5s ease;
  width: ${props => props.width};
  background-color: ${props => props.color};
  ${props => css`
    background-color: ${props.color};
  `}
`;

export const PasswordStrengthText = styled.p`
  margin-top: 5px;
  color: ${props => props.color};
  font-size: 14px;
  font-weight: bold;
`;

import { BsPlusLg } from 'react-icons/bs';
import styled from 'styled-components';

export const RoundedWrap = styled.div`
  width: ${({ theme }) => theme.spacing(11)};
  height: ${({ theme }) => theme.spacing(11)};
  background: ${({ theme }) => theme.colors.btnGradient};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};
  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    bottom: ${({ theme }) => theme.spacing(10)};
    right: ${({ theme }) => theme.spacing(10)};
  }
`;

export const PlusBtn = styled(BsPlusLg)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
`;

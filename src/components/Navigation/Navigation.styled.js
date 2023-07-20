import { IoMdHome } from 'react-icons/io';
import styled from 'styled-components';

export const spanStyled = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
    color: ${({ theme }) => theme.colors.primaryFont};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    transition: ${({ theme }) => theme.transitions.regular};
    line-height: ${({ theme }) => theme.lineHeights.normal};

    &:hover {
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      transform: scale(1.03);
    }
  }
`;

export const homeIcon = styled(IoMdHome)`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  margin-left: 32px;
  transition: ${({ theme }) => theme.transitions.regular};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-left: 62px;

    &:hover {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;

export const statisticsIcon = styled(IoMdHome)`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  margin-left: 32px;
  transition: ${({ theme }) => theme.transitions.regular};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-left: 62px;

    &:hover {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;

export const currencyIcon = styled(IoMdHome)`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  margin-left: 32px;
  transition: ${({ theme }) => theme.transitions.regular};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-left: 62px;

    &:hover {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;

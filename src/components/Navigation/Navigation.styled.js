import { BiStats } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SpanStyled = styled.span`
  margin-left: 20px;
  transition: transform 1500ms ease-in-out;

  &:hover {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    transform: scale(1.03);
  }
`;

export const ContainerStyledMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px;
`;

export const ContainerStyledDesktop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 16px 40px 0 28px;
`;

export const NavLinkStyled = styled(NavLink)`
  transition: transform 250ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const MenuStyledMobile = styled.ul`
  padding-top: 12px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 32px;
`;

export const MenuStyledDesktop = styled.ul`
  display: flex;
  flex-direction: column;
  column-gap: 12px;
`;

export const HomeIcon = styled(IoMdHome)`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  margin-left: 32px;
  transition: ${({ theme }) => theme.transitions.color};
  &:hover {
    transform: scale(1.03);
    color: ${({ theme }) => theme.colors.blue};
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-left: 62px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;

export const StatisticsIcon = styled(BiStats)`
  width: 44px;
  height: 44px;
  flex-shrink: 0;

  transition: transform 2000 ms ease-in-out, color 2000 ms;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    &:hover {
      transform: scale(1.03);
      color: ${({ theme }) => theme.colors.blue};
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
`;

export const CurrencyIcon = styled(FaDollarSign)`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  margin-right: 32px;
  transition: ${({ theme }) => theme.transitions.color};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    &:hover {
      transform: scale(1.03);
      color: ${({ theme }) => theme.colors.blue};
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
`;

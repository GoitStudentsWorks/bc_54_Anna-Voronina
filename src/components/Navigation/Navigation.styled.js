import { BiStats } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerStyledMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px;
`;

export const ContainerStyledDesktop = styled.div`
  /* display: flex; */
  width: 100%;
  margin-left: 32px;
  margin-top: 40px;
  @media screen and (min-width: 1156px) {
    margin-left: 16px;
  }
`;

export const ContainerStyledIconDesktop = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: ${({ theme }) => theme.transitions.color};
  &:focus {
    background-color: ${({ theme }) => theme.colors.blue};
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    transform: scale(1.03);
  }
`;

export const NavLinkStyledMobile = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 8px;

  transition: ${({ theme }) => theme.transitions.color};

  &:focus {
    background-color: ${({ theme }) => theme.colors.blue};
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    transform: scale(1.03);
  }
`;

export const NavLinkStyledDesktop = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: left;
  /* transition: transform 250ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  } */
`;

export const ItemStyledDesktop = styled.li`
  /* display: flex; */
`;

export const MenuStyledMobile = styled.ul`
  padding-top: 12px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 32px;
`;

export const MenuStyledDesktop = styled.ul``;

export const SpanStyled = styled.span`
  margin-left: 20px;
  transition: transform 500ms ease-in-out;

  &:hover {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    transform: scale(1.03);
  }
`;

export const HomeIcon = styled(IoMdHome)`
  fill: rgba(255, 255, 255, 0.3);
  width: 32px;
  height: 32px;

  &:focus {
    fill: rgba(255, 255, 255, 1);
  }

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    margin-left: 62px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;

export const StatisticsIcon = styled(BiStats)`
  fill: rgba(255, 255, 255, 0.3);
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
`;

export const CurrencyIcon = styled(FaDollarSign)`
  fill: rgba(255, 255, 255, 0.3);
  width: 28px;
  height: 28px;
  transition: ${({ theme }) => theme.transitions.color};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
`;

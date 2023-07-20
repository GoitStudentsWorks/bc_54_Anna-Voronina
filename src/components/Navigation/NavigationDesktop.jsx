import React from 'react';
import { BiStats } from 'react-icons/bi';
import {
  ContainerStyledDesktop,
  HomeIcon,
  MenuStyledDesktop,
  NavLinkStyled,
  SpanStyled,
  StatisticsIcon,
  homeIcon,
} from './Navigation.styled';
import { NavLink } from 'react-router-dom';

export const NavigationDesktop = () => {
  return (
    <ContainerStyledDesktop>
      <nav>
        <MenuStyledDesktop>
          <li>
            <NavLinkStyled to="/home">
              <HomeIcon />
              <SpanStyled>Home</SpanStyled>
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/statistic">
              <StatisticsIcon />
              <SpanStyled>Statistic</SpanStyled>
            </NavLinkStyled>
          </li>
        </MenuStyledDesktop>
      </nav>
    </ContainerStyledDesktop>
  );
};

import React from 'react';
import {
  ContainerStyledDesktop,
  ContainerStyledIconDesktop,
  HomeIcon,
  ItemStyledDesktop,
  MenuStyledDesktop,
  NavLinkStyledDesktop,
  SpanStyled,
  StatisticsIcon,
} from './Navigation.styled';
import { NavLink } from 'react-router-dom';

export const NavigationDesktop = () => {
  return (
    <ContainerStyledDesktop>
      <nav>
        <MenuStyledDesktop>
          <ItemStyledDesktop>
            <NavLinkStyledDesktop to="/home">
              <ContainerStyledIconDesktop>
                <HomeIcon />
              </ContainerStyledIconDesktop>
              <span>Home</span>
            </NavLinkStyledDesktop>
          </ItemStyledDesktop>
          <ItemStyledDesktop>
            <NavLinkStyledDesktop to="/statistic">
              <ContainerStyledIconDesktop>
                <StatisticsIcon />
              </ContainerStyledIconDesktop>
              <span>Statistic</span>
            </NavLinkStyledDesktop>
          </ItemStyledDesktop>
        </MenuStyledDesktop>
      </nav>
    </ContainerStyledDesktop>
  );
};

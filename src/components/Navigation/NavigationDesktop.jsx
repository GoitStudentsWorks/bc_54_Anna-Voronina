import React from 'react';
import {
  ContainerStyledDesktop,
  ContainerStyledIconDesktop,
  HomeIcon,
  MenuStyledDesktop,
  NavLinkStyledDesktop,
  SpanStyled,
  StatisticsIcon,
} from './Navigation.styled';

export const NavigationDesktop = () => {
  return (
    <ContainerStyledDesktop>
      <nav>
        <MenuStyledDesktop>
          <li>
            <NavLinkStyledDesktop to="/home">
              <ContainerStyledIconDesktop>
                <HomeIcon />
              </ContainerStyledIconDesktop>
              <SpanStyled>Home</SpanStyled>
            </NavLinkStyledDesktop>
          </li>
          <li>
            <NavLinkStyledDesktop to="/statistic">
              <ContainerStyledIconDesktop>
                <StatisticsIcon />
              </ContainerStyledIconDesktop>
              <SpanStyled>Statistic</SpanStyled>
            </NavLinkStyledDesktop>
          </li>
        </MenuStyledDesktop>
      </nav>
    </ContainerStyledDesktop>
  );
};

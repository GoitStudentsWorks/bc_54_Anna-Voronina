import React from 'react';
import {
  ContainerStyled,
  ContainerStyledMobile,
  CurrencyIcon,
  HomeIcon,
  MenuStyledMobile,
  NavLinkStyled,
  StatisticsIcon,
  menuStyled,
} from './Navigation.styled';

export const NavigationMobile = () => {
  return (
    <ContainerStyledMobile>
      <nav>
        <MenuStyledMobile>
          <li>
            <NavLinkStyled to="/home">
              <HomeIcon />
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/statistic">
              <StatisticsIcon />
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/currency">
              <CurrencyIcon />
            </NavLinkStyled>
          </li>
        </MenuStyledMobile>
      </nav>
    </ContainerStyledMobile>
  );
};

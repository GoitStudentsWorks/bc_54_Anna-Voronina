import React from 'react';
import { BiStats } from 'react-icons/bi';
import { homeIcon } from './Navigation.styled';
import { NavLink } from 'react-router-dom';

export const NavigationDesktop = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">
            <homeIcon />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistic">
            <BiStats />
            <span>statistic</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

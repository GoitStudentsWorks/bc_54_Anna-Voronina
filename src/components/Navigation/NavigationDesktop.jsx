import React from 'react';
import { BiStats } from 'react-icons/bi';
import { IoMdHome } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export const NavigationDesktop = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">
            <IoMdHome />
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

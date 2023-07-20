import React from 'react';
import { BiStats } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export const NavigationMobile = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">
            <IoMdHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistic">
            <BiStats />
          </NavLink>
        </li>
        <li>
          <NavLink to="/currency">
            <FaDollarSign />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

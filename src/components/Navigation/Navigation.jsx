import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/statistic">statistic</NavLink>
        </li>
      </ul>
    </>
  );
};

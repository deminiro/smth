import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.module.css';

const Navbar = () => (
  <ul>
    <li>
      <NavLink exact to="/store">Store</NavLink>
    </li>
    <li>
      <NavLink exact to="/favorite">Favorite</NavLink>
    </li>
    <li>
      <NavLink exact to="/sales">Sales</NavLink>
    </li>
  </ul>
);

export default Navbar;

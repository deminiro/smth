import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.module.css';

const Navbar = () => (
  <ul>
    <li>
      <NavLink exact to="/myprofile">My page</NavLink>
    </li>
    <li>
      <NavLink exact to="/myfriends">My friends</NavLink>
    </li>
    <li>
      <NavLink exact to="/mymessages">My messages</NavLink>
    </li>
  </ul>
);

export default Navbar;
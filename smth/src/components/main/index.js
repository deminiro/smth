import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Messages from './pages/messages';
import Profile from './pages/profile';
import Friends from './pages/friends';
import './style.css';

const Main = () => (
  <div className="main">
    <BrowserRouter>
      <Navbar />
      <div className="result-of-navbar">
        <Route path='/myprofile' component={Profile} />
        <Route path='/mymessages' component={Messages} />
        <Route path='/myfriends' component={Friends} />
      </div> 
    </BrowserRouter>
  </div>
);

export default Main;


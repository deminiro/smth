import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import Navbar from './navbar/navbar';
import Messages from './pages/messages';
import Profile from './pages/profile';
import Friends from './pages/friends';
import './style.css';

const Main = ({ store }) => {
  const dispatch = useDispatch();

  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <div className="result-of-navbar">
          <Route path="/myprofile" component={() => <Profile dispatch={dispatch} store={store} />} />
          <Route path="/mymessages" component={Messages} />
          <Route path="/myfriends" component={Friends} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Main;

Main.propTypes = {
  store: propTypes.object,
};

Main.defaultProps = {
  store: {},
};

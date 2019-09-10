import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import { takeDataArmchairs, makeFavoriteThing } from '../../redux/actions';
import Navbar from './navbar/navbar';
import Sales from './pages/sales';
import Market from './pages/market';
import Favorite from './pages/favorite';
import './style.css';

const Main = ({ store }) => {
  const dispatch = useDispatch();
  dispatch(takeDataArmchairs());

  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <div className="result-of-navbar">
          <Route
            path="/store"
            component={() => (
              <Market
                dispatch={dispatch}
                takeDataArmchairs={takeDataArmchairs}
                makeFavoriteThing={makeFavoriteThing}
                store={store}
              />
            )}
          />
          <Route path="/favorite" component={Favorite} />
          <Route path="/sales" component={Sales} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Main;

Main.propTypes = {
  store: propTypes.shape({
    getState: propTypes.func,
  }),
};

Main.defaultProps = {
  store: propTypes.shape({
    getState: () => {},
  }),
};

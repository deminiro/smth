import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import {
  takeDataArmchairs, makeFavoriteThing, favoriteThingsFunc, changeAmountOfBuys,
  returnPurchaseItems,
} from '../../redux/actions';
import Navbar from './navbar/navbar';
import Purchases from './pages/purchases';
import Market from './pages/market';
import Favorite from './pages/favorite';
import './style.css';

const Main = ({ store }) => {
  const dispatch = useDispatch();

  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <div className="result-of-navbar">
          <Route
            path="/store"
            component={() => {
              dispatch(takeDataArmchairs());
              return (
                <Market
                  changeAmountOfBuys={changeAmountOfBuys}
                  dispatch={dispatch}
                  takeDataArmchairs={takeDataArmchairs}
                  makeFavoriteThing={makeFavoriteThing}
                  store={store}
                />
              );
            }}
          />
          <Route
            path="/favorite"
            component={() => {
              dispatch(favoriteThingsFunc());
              return (
                <Favorite
                  changeAmountOfBuys={changeAmountOfBuys}
                  dispatch={dispatch}
                  store={store}
                  favoriteThingsFunc={favoriteThingsFunc}
                  makeFavoriteThingFunc={makeFavoriteThing}
                />
              );
            }}
          />
          <Route
            path="/purchases"
            component={() => {
              dispatch(returnPurchaseItems());
              return (
                <Purchases
                  store={store}
                  dispatch={dispatch}
                  changeAmountOfBuys={changeAmountOfBuys}
                />
              );
            }}
          />
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

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import solidStar from './solidStarImport';

import './profileCss.css';

const Favorite = ({
  store, dispatch, makeFavoriteThingFunc, favoriteThingsFunc,
}) => {
  const [favoriteThings, setFavoriteThings] = useState(useSelector((state) => state.dataMyProfile));
  const [thing, setThing] = useState('');

  function onClickOnIcon(img = '') {
    dispatch(makeFavoriteThingFunc(img));
    dispatch(favoriteThingsFunc());
    setThing(img);
  }

  useEffect(() => {
    const newData = store.getState();
    dispatch(favoriteThingsFunc());
    setFavoriteThings(newData.dataMyProfile);
  }, [thing]);

  return (
    <div className="profile-container">
      <ul className="list">
        {favoriteThings.map(({
          img, nameOfThing, price, favorite,
        }) => (
          <li className="list-element" key={img + price}>
            <img src={img} width="250" height="250" className="list-element__image" alt="armchair" />
            <div className="list-element__container-info">
              <div>
                <p className="list-element__name">{nameOfThing}</p>
                <p className="list-element__price">{price}</p>
              </div>
              <FontAwesomeIcon
                onClick={() => onClickOnIcon(img, favorite)}
                icon={solidStar}
                className="list-element__star"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;

Favorite.propTypes = {
  store: propTypes.shape({
    getState: propTypes.func,
  }),
  dispatch: propTypes.func,
  makeFavoriteThingFunc: propTypes.func,
  favoriteThingsFunc: propTypes.func,
};

Favorite.defaultProps = {
  store: propTypes.shape({
    getState: () => {},
  }),
  dispatch: () => {},
  makeFavoriteThingFunc: () => {},
  favoriteThingsFunc: () => {},
};

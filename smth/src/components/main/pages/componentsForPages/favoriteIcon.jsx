import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import solidStar from '../solidStarImport';

const FavoriteIcon = ({
  store, dispatch, makeFavoriteThingFunc, img, favorite, favoriteThingsFunc,
}) => {
  const [thing, setThing] = useState(favorite);
  console.log(favorite);

  function onClickOnIcon(imgSrc = '', favoriteBool) {
    dispatch(makeFavoriteThingFunc(imgSrc));
    setThing(favoriteBool);
  }

  useEffect(() => {
    setThing(!favorite);
  }, [favorite]);

  return (
    <FontAwesomeIcon
      onClick={() => onClickOnIcon(img, thing)}
      icon={thing ? solidStar : faStar}
      className="list-element__star"
    />
  );
};

export default FavoriteIcon;

FavoriteIcon.propTypes = {
  store: propTypes.shape({
    getState: propTypes.func,
  }),
  dispatch: propTypes.func,
  makeFavoriteThingFunc: propTypes.func,
  favoriteThingsFunc: propTypes.func,
  img: propTypes.string,
  favorite: propTypes.bool,
};

FavoriteIcon.defaultProps = {
  store: propTypes.shape({
    getState: () => {},
  }),
  dispatch: () => {},
  makeFavoriteThingFunc: () => {},
  favoriteThingsFunc: () => {},
  img: '',
  favorite: true,
};
